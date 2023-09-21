import { Module } from '@nestjs/common';
import { CourseCategoriesService } from './course-categories.service';
import { CourseCategoriesController } from './course-categories.controller';
import { DatabasesModule } from 'src/databases/databases.module';

@Module({
  imports: [DatabasesModule],
  controllers: [CourseCategoriesController],
  providers: [CourseCategoriesService],
})
export class CourseCategoriesModule {}
