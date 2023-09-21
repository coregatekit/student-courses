import { CreateCourseCategoryDto } from '../dto/create-course-category.dto';

export class CourseCategory {
  id: number;
  name: string;
  short_name: string;

  constructor(data: CreateCourseCategoryDto) {
    this.name = data.name;
    this.short_name = data.short_name;
  }
}
