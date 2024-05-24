import { Controller, Get } from '@nestjs/common';
import { M2Service } from './m2.service';
import { Ctx, EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class M2Controller {
  constructor(private readonly m2Service: M2Service) {}

  @Get()
  getHello(): string {
    return this.m2Service.getHello();
  }

  @EventPattern('say_hi')
  sayHi(@Payload() data: any) {
    console.log('this is m2 service received : ', data);
  }
}
