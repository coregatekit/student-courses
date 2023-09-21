import { Module } from '@nestjs/common';
import { DatabasesModule } from './databases/databases.module';
import { StudentsModule } from './modules/students/students.module';
import { HealthModule } from './modules/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { TeachersModule } from './modules/teachers/teachers.module';
import { CoursesModule } from './modules/courses/courses.module';
import { CourseCategoriesModule } from './modules/course-categories/course-categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabasesModule,
    HealthModule,
    StudentsModule,
    TeachersModule,
    CoursesModule,
    CourseCategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
