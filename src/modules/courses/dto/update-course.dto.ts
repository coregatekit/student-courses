import { IsNotEmpty, IsString, MaxLength, IsNumber } from 'class-validator';

export class UpdateCourseDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  level: number;

  @IsNotEmpty()
  @IsNumber()
  teacher_id: number;
}
