import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCourseCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty({ required: true })
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(3)
  @ApiProperty({ required: true })
  short_name: string;
}
