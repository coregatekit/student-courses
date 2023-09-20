import { IsString, IsOptional, MaxLength, IsEmail } from 'class-validator';

export class UpdateTeacherDto {
  @IsString()
  @IsOptional()
  @MaxLength(100)
  first_name: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  last_name: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  phone_number: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  bio: string;
}
