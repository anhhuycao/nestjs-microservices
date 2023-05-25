import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: { host: '0.0.0.0', port: 3001 },
  });
  await app.listen();
  Logger.log(`🚀 Server running on port: ${3001}`);
}
bootstrap();
