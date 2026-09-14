import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Todas las rutas empezarán con /api
  app.setGlobalPrefix('api');
  
  // Configuración de CORS para que React (puerto 5173) pueda hablar con Nest (puerto 3000)
  app.enableCors({
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Todo API')
    .setDescription('API para manejar tareas de un usuario')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        in: 'header',
      },
      'jwt',
    )
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  // La documentación estará disponible en http://localhost:3000/docs
  SwaggerModule.setup('docs', app, document);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
