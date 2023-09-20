import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { Student } from './models/student.model';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StudentsService {
  private studentYear: number;

  constructor(
    private prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {
    this.studentYear = this.configService.get<number>('CURRENT_STUDENT_YEAR');
  }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    return await this.prismaService.students.create({
      data: {
        ...createStudentDto,
        code: await this.generateStudentCode(),
      },
    });
  }

  async findAll(): Promise<Student[]> {
    return await this.prismaService.students.findMany();
  }

  async findOne(id: number): Promise<Student> {
    return await this.prismaService.students.findFirst({ where: { id } });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    return await this.prismaService.students.update({
      where: {
        id,
      },
      data: updateStudentDto,
    });
  }

  async generateStudentCode(): Promise<string> {
    const runNumber = await this.prismaService.student_runnumber.findFirst({
      where: { id: 1 },
    });
    let currentRunNumber: number = runNumber.current_number;
    // Generate the student code by combining the run number and a constant prefix
    const studentCode = `B${this.studentYear}${currentRunNumber
      .toString()
      .padStart(5, '0')}`;
    currentRunNumber++;

    // Increment the run number for the next student
    await this.prismaService.student_runnumber.update({
      where: { id: 1 },
      data: { current_number: currentRunNumber },
    });
    return studentCode;
  }
}
