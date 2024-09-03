import { Controller, Get } from '@nestjs/common';
import { FirebaseDatabase } from './common/firebase/database';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    FirebaseDatabase()
    return 'OK';
  }
}
