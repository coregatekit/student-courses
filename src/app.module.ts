import { Module } from '@nestjs/common';
import { DatabasesModule } from './databases/databases.module';
import { StudentsModule } from './modules/students/students.module';
import { HealthModule } from './modules/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { TeachersModule } from './modules/teachers/teachers.module';
import { CoursesModule } from './modules/courses/courses.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabasesModule,
    HealthModule,
    StudentsModule,
    TeachersModule,
    CoursesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
