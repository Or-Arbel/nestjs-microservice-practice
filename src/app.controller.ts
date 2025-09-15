import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/update')
  updateAlert(): object {
    return {message: 'post request from app controller'}; // should be changed and use func from alerts service
  }
}
