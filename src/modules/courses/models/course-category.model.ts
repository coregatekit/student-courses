import { CreateCourseCategoryDto } from '../dto/create-course-category.dto';

export class CourseCategory {
  id: number;
  name: string;

  constructor(data: CreateCourseCategoryDto) {
    this.name = data.name;
  }
}
