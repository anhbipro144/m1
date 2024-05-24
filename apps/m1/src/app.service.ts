import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('m2_queue') private m2: ClientProxy) {}

  getHello(): void {
    this.m2.emit('say_hi', 'hello');
  }
}
