import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
  async checkServer() {
    return { server: { status: 'up' } };
  }
}
