import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/databases/prisma/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prismaService: PrismaService) {}

  async create(createCourseDto: CreateCourseDto) {
    return await this.prismaService.courses.create({
      data: {
        name: createCourseDto.name,
        level: createCourseDto.level,
        point: createCourseDto.point,
        code: await this.generateCourseCode(createCourseDto.category_id),
        teacher: {
          connect: {
            id: createCourseDto.teacher_id,
          },
        },
        course_category: {
          connect: {
            id: createCourseDto.category_id,
          },
        },
      },
    });
  }

  findAll() {
    return this.prismaService.courses.findMany();
  }

  findOne(id: number) {
    return this.prismaService.courses.findFirst({ where: { id } });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.prismaService.courses.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  remove(id: number) {
    return this.prismaService.courses.delete({ where: { id } });
  }

  async generateCourseCode(categoryId: number) {
    const category = await this.prismaService.course_categories.findFirst({
      where: { id: categoryId },
    });
    const runNumber = await this.prismaService.runnumber.findFirst({
      where: { name: 'course_runnumber' },
    });
    let currentRunNumber: number = runNumber.current_number;
    // Generate the student code by combining the run number and a constant prefix
    const courseCode = `${category.short_name}${currentRunNumber
      .toString()
      .padStart(3, '0')}`;
    currentRunNumber++;
    await this.prismaService.runnumber.update({
      where: { id: runNumber.id },
      data: { current_number: currentRunNumber },
    });
    return courseCode;
  }
}
