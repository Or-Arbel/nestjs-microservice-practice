import { Controller, Post } from '@nestjs/common';

@Controller('alerts')
export class AlertsController {
  @Post()
  updateAlert(): object {
    // this func should move to alerts service
    return { message: 'this function creates or updates a record' };
  }
}
