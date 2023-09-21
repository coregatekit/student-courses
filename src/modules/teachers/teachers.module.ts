import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { DatabasesModule } from 'src/databases/databases.module';

@Module({
  imports: [DatabasesModule],
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
