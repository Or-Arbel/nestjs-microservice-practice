import { Body, Injectable } from '@nestjs/common';
import { CreateAlertDto, UpdateAlertDto } from './schemas/alert.schema';

@Injectable()
export class AlertsService {
  createAlert(alertJson: CreateAlertDto): object {
    return { message: 'alert created', alertJson };
  }

  updateAlert(alertJson: UpdateAlertDto): object {
    return { message: 'alert updated', alertJson };
  }
}
