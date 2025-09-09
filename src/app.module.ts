import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlertsModule } from './alerts/alerts.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [AlertsModule, StatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
