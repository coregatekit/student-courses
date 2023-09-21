import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';

@Injectable()
export class TeachersService {
  constructor(private prismaService: PrismaService) {}

  async create(createTeacherDto: CreateTeacherDto) {
    return await this.prismaService.teachers.create({
      data: {
        ...createTeacherDto,
        code: await this.generateTeacherCode(),
      },
    });
  }

  async findAll() {
    return await this.prismaService.teachers.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.teachers.findFirst({ where: { id } });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return await this.prismaService.teachers.update({
      where: { id },
      data: updateTeacherDto,
    });
  }

  async generateTeacherCode(): Promise<string> {
    const runNumber = await this.prismaService.runnumber.findFirst({
      where: { name: 'teacher_runnumber' },
    });
    let currentRunNumber: number = runNumber.current_number;
    const teacherCode = `T${currentRunNumber.toString().padStart(7, '0')}`;
    currentRunNumber++;

    await this.prismaService.runnumber.update({
      where: { id: runNumber.id },
      data: { current_number: currentRunNumber },
    });
    return teacherCode;
  }
}
