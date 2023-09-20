import { Gender } from '@prisma/client';
import { CreateStudentDto } from '../dto/create-student.dto';

export class Student {
  id: number;
  code: string;
  first_name: string;
  last_name: string;
  gender: Gender;
  email?: string;
  phone_number?: string;
  bio: string;

  constructor(data: CreateStudentDto) {
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.gender = data.gender;
    this.email = data.email;
    this.phone_number = data.phone_number;
    this.bio = data.bio;
  }
}
