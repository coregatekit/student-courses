import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({ required: true })
  first_name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({ required: true })
  last_name: string;

  @IsEnum(Gender)
  @IsNotEmpty()
  @ApiProperty({ required: true, enum: Gender })
  gender: Gender;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  @ApiProperty({ required: true })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @ApiProperty({ required: true })
  phone_number: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  bio: string;
}
