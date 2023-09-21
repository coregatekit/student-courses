import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { Teacher } from './models/teacher.model';

@Injectable()
export class TeachersService {
  constructor(
    private prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) { }

  create(createTeacherDto: CreateTeacherDto) {
    return 'This action adds a new teacher';
  }

  async findAll(): Promise<Teacher[]> {
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
}
