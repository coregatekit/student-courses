import { CreateCourseDto } from '../dto/create-course.dto';

export class Course {
  id: number;
  code: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  teacher_id: number;
  category_id: number;

  constructor(data: CreateCourseDto) {
    this.name = data.name;
    this.teacher_id = data.teacher_id;
    this.category_id = data.category_id;
  }
}
