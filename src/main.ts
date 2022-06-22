import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("Бекенд для квестов")
    .setDescription("Описание API для Квестов")
    .setVersion("1.0")
    .addTag("Quest")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);


  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
