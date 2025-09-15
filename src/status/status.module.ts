import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [StatusController]
})
export class StatusModule {}
