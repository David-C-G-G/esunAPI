import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');

  //para generar el url p.e. localhost:3000/api
  app.setGlobalPrefix('api');

  //esta configuracion es para las validaciones que usarn en el dto
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  // para creación de documentacion
  const config = new DocumentBuilder()
    .setTitle('Esun RESTFULL API')
    .setDescription('Esun endpoints')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);
  logger.log(`Aplicacion corriendo en el puerto ${process.env.PORT}`);
}
bootstrap();
