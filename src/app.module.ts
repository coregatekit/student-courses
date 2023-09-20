import { Module } from '@nestjs/common';
import { DatabasesModule } from './databases/databases.module';
import { StudentsModule } from './modules/students/students.module';

@Module({
  imports: [DatabasesModule, StudentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
