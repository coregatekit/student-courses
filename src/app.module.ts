import { Module } from '@nestjs/common';
import { DatabasesModule } from './databases/databases.module';
import { StudentsModule } from './modules/students/students.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [DatabasesModule, StudentsModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
