import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class AlertsService {
  updateAlert(@Body() alertJson: object): object {
    return { message: 'alert updated/created', alertJson };
  }
}
