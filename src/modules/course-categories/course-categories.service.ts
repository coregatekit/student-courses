import { Injectable } from '@nestjs/common';
import { CreateCourseCategoryDto } from './dto/create-course-category.dto';
import { UpdateCourseCategoryDto } from './dto/update-course-category.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';

@Injectable()
export class CourseCategoriesService {
  constructor(private prismaService: PrismaService) {}

  async create(createCourseCategoryDto: CreateCourseCategoryDto) {
    const courseCategory = await this.prismaService.course_categories.create({
      data: createCourseCategoryDto,
    });
    return courseCategory;
  }

  async findAll() {
    const courseCategories =
      await this.prismaService.course_categories.findMany();
    return courseCategories;
  }

  findOne(id: number) {
    return this.prismaService.course_categories.findFirst({ where: { id } });
  }

  async update(id: number, updateCourseCategoryDto: UpdateCourseCategoryDto) {
    return await this.prismaService.course_categories.update({
      where: { id },
      data: updateCourseCategoryDto,
    });
  }

  remove(id: number) {
    return this.prismaService.course_categories.delete({ where: { id } });
  }
}
