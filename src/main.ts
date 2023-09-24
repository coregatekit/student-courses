import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { LoggerFactory } from './utils/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: LoggerFactory('Student Courses'),
  });
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Student courses practice.')
    .setDescription('An example api to practice nestjs and prisma.')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3090);
}
bootstrap();
