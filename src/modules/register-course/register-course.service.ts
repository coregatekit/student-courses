import { Injectable } from '@nestjs/common';
import { CreateRegisterCourseDto } from './dto/create-register-course.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';

@Injectable()
export class RegisterCourseService {
  constructor(private prismaService: PrismaService) {}

  async create(createRegisterCourseDto: CreateRegisterCourseDto) {
    return await this.prismaService.students_courses.create({
      data: {
        student: {
          connect: {
            id: createRegisterCourseDto.student_id,
          },
        },
        course: {
          connect: {
            id: createRegisterCourseDto.course_id,
          },
        },
      },
    });
  }

  findAll() {
    return this.prismaService.students_courses.findMany();
  }

  findOne(id: number) {
    return this.prismaService.students_courses.findFirst({ where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} registerCourse`;
  }
}
