import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  @ApiProperty({ required: true })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true })
  level: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true })
  teacher_id: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true })
  category_id: number;
}
