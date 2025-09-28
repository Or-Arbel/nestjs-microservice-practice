import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AlertsService } from './modules/alerts/alerts.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly alertsService: AlertsService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

    @Post('/update')
    updateAlert(@Body() alertJson: object): object {
      return this.alertsService.updateAlert(alertJson);
    }
}
