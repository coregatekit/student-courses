import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseCategoryDto } from './dto/create-course-category.dto';
import { CourseCategory } from './models/course-category.model';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CoursesService {
  constructor(private prismaService: PrismaService) {}

  create(createCourseDto: CreateCourseDto) {
    return 'This action adds a new course';
  }

  findAll() {
    return `This action returns all courses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }

  async createCourseCategory(
    createCourseCategoryDto: CreateCourseCategoryDto,
  ): Promise<CourseCategory> {
    return await this.prismaService.course_categories.create({
      data: createCourseCategoryDto as Prisma.course_categoriesCreateInput,
    });
  }
}
