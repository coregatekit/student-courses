import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRegisterCourseDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  student_id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  course_id: number;
}
