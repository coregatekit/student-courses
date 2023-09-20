import { Module } from '@nestjs/common';
import { DatabasesModule } from './databases/databases.module';

@Module({
  imports: [DatabasesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
