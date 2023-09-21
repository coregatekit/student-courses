import { Injectable } from '@nestjs/common';
import { CreateRegisterCourseDto } from './dto/create-register-course.dto';
import { UpdateRegisterCourseDto } from './dto/update-register-course.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';

@Injectable()
export class RegisterCourseService {
  constructor(private prismaService: PrismaService) {}

  create(createRegisterCourseDto: CreateRegisterCourseDto) {
    return 'This action adds a new registerCourse';
  }

  findAll() {
    return `This action returns all registerCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registerCourse`;
  }

  update(id: number, updateRegisterCourseDto: UpdateRegisterCourseDto) {
    return `This action updates a #${id} registerCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} registerCourse`;
  }
}
