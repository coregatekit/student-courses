import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRegisterCourseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  student_code: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  course_code: string;
}
