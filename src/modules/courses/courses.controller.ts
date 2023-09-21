import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseCategoryDto } from './dto/create-course-category.dto';
import { UpdateCourseCategoryDto } from './dto/update-course-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }

  @Post('categories')
  async createCategory(
    @Body() createCourseCategoryDto: CreateCourseCategoryDto,
  ) {
    return await this.coursesService.createCourseCategory(
      createCourseCategoryDto,
    );
  }

  @Get('categories')
  findAllCategories() {
    return this.coursesService.findAllCategories();
  }

  @Get('categories/:id')
  findOneCategory(@Param('id') id: string) {
    return this.coursesService.findCategory(+id);
  }

  @Patch('categories/:id')
  updateCategory(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseCategoryDto,
  ) {
    return this.coursesService.updateCategory(+id, updateCourseDto);
  }

  @Delete('categories/:id')
  removeCategory(@Param('id') id: string) {
    return this.coursesService.removeCategory(+id);
  }
}
