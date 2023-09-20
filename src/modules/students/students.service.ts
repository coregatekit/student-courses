import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { Student } from './models/student.model';

@Injectable()
export class StudentsService {
  currentRunNumber = 1;
  year = 59;

  constructor(private prismaService: PrismaService) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    return await this.prismaService.students.create({
      data: {
        ...createStudentDto,
        code: this.generateStudentCode(),
      },
    });
  }

  async findAll(): Promise<Student[]> {
    return await this.prismaService.students.findMany();
  }

  async findOne(id: number): Promise<Student> {
    return await this.prismaService.students.findFirst({ where: { id } });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }

  generateStudentCode(): string {
    // Generate the student code by combining the run number and a constant prefix
    const studentCode = `B${this.year}${this.currentRunNumber
      .toString()
      .padStart(5, '0')}`;

    // Increment the run number for the next student
    this.currentRunNumber++;

    return studentCode;
  }
}
