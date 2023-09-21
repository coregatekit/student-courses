import { Module } from '@nestjs/common';
import { RegisterCourseService } from './register-course.service';
import { RegisterCourseController } from './register-course.controller';
import { DatabasesModule } from 'src/databases/databases.module';

@Module({
  imports: [DatabasesModule],
  controllers: [RegisterCourseController],
  providers: [RegisterCourseService],
})
export class RegisterCourseModule {}
