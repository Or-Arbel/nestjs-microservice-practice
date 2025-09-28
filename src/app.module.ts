import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlertsModule } from './modules/alerts/alerts.module';
import { StatusModule } from './modules/status/status.module';
import { AlertsService } from './modules/alerts/alerts.service';

@Module({
  imports: [AlertsModule, StatusModule, AlertsModule],
  controllers: [AppController],
  providers: [AppService, AlertsService],
})
export class AppModule {}
