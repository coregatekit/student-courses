import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRegisterCourseDto } from './dto/create-register-course.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { ERROR_MSG } from 'src/utils/error-message';

@Injectable()
export class RegisterCourseService {
  constructor(private prismaService: PrismaService) {}

  async create(createRegisterCourseDto: CreateRegisterCourseDto) {
    const student = await this.prismaService.students.findFirst({
      where: { code: createRegisterCourseDto.student_code },
    });
    if (!student) {
      throw new NotFoundException(ERROR_MSG.STUDENT_NOT_FOUND);
    }
    const course = await this.prismaService.courses.findFirst({
      where: { code: createRegisterCourseDto.course_code },
    });
    if (!course) {
      throw new NotFoundException(ERROR_MSG.COURSE_NOT_FOUND);
    }
    const registered = await this.prismaService.students_courses.findFirst({
      where: {
        student: {
          code: student.code,
        },
        course: {
          code: course.code,
        },
      },
    });
    if (registered) {
      throw new ForbiddenException(ERROR_MSG.COURSE_ALREADY_REGISTERED);
    }
    return await this.prismaService.students_courses.create({
      data: {
        student: {
          connect: {
            id: student.id,
          },
        },
        course: {
          connect: {
            id: course.id,
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

  async remove(id: number) {
    return this.prismaService.students_courses.update({
      where: { id },
      data: {
        remove_course_at: new Date().toISOString(),
      },
    });
  }
}
