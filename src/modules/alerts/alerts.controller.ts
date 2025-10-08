import { Body, Controller, Post, Put } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import * as alertSchema from './schemas/alert.schema';
import { ZodValidationPipe } from 'src/common/validators/zod.pipe';

@Controller('alerts')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Post('/create')
  create(
    @Body(new ZodValidationPipe(alertSchema.CreateAlertSchema))
    createAlertJson: alertSchema.CreateAlertDto,
  ) {
    return this.alertsService.createAlert(createAlertJson);
  }

  @Put('/update')
  update(
    @Body(new ZodValidationPipe(alertSchema.UpdateAlertSchema))
    updateAlertJson: alertSchema.UpdateAlertDto,
  ) {
    return this.alertsService.updateAlert(updateAlertJson);
  }
}
