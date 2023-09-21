import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsOptional } from 'class-validator';

export class UpdateCourseCategoryDto {
  @IsString()
  @IsOptional()
  @MaxLength(50)
  @ApiProperty({ required: false })
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  @ApiProperty({ required: false })
  short_name: string;
}
