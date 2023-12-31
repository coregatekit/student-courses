import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { ERROR_MSG } from 'src/utils/error-message';

@Injectable()
export class StudentsService {
  private studentYear: number;

  constructor(
    private prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {
    this.studentYear = this.configService.get<number>('CURRENT_STUDENT_YEAR');
  }

  async create(createStudentDto: CreateStudentDto) {
    const student = await this.prismaService.students.findFirst({
      where: {
        first_name: createStudentDto.first_name,
        last_name: createStudentDto.last_name,
      },
    });
    if (student) {
      throw new ForbiddenException(ERROR_MSG.STUDENT_ALREADY_REGISTER);
    }
    return await this.prismaService.students.create({
      data: {
        ...createStudentDto,
        code: await this.generateStudentCode(),
      },
    });
  }

  async findAll() {
    return await this.prismaService.students.findMany();
  }

  async findOne(id: number) {
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
    const runNumber = await this.prismaService.runnumber.findFirst({
      where: { name: 'student_runnumber' },
    });
    let currentRunNumber: number = runNumber.current_number;
    // Generate the student code by combining the run number and a constant prefix
    const studentCode = `B${this.studentYear}${currentRunNumber
      .toString()
      .padStart(5, '0')}`;
    currentRunNumber++;

    // Increment the run number for the next student
    await this.prismaService.runnumber.update({
      where: { id: runNumber.id },
      data: { current_number: currentRunNumber },
    });
    return studentCode;
  }
}
