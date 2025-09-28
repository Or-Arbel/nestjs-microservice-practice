import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { StatusService } from './status.service';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [StatusController],
  providers: [StatusService]
})
export class StatusModule {}
