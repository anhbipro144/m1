import { NestFactory } from '@nestjs/core';
import { M2Module } from './m2.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(M2Module);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      persistent: true,
      queue: 'm2_queue',
      urls: ['amqp://rabbitmq:5672'],
    },
  });
  await app.startAllMicroservices();
}
bootstrap();
