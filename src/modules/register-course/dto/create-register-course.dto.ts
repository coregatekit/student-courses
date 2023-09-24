import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRegisterCourseDto {
  @IsNumber()
  @IsNotEmpty()
  student_id: number;

  @IsNumber()
  @IsNotEmpty()
  course_id: number;
}
