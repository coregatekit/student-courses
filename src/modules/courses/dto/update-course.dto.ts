import { IsString, MaxLength, IsNumber, IsOptional } from 'class-validator';

export class UpdateCourseDto {
  @IsOptional()
  @IsString()
  @MaxLength(150)
  name: string;

  @IsOptional()
  @IsNumber()
  level: number;

  @IsOptional()
  @IsNumber()
  point: number;

  @IsOptional()
  @IsNumber()
  teacher_id: number;
}
