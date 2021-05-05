import { Injectable, OnModuleInit } from '@nestjs/common';
import { LongRunningService } from 'src/long-running/long-running.service';

@Injectable()
export class GlobalThingService implements OnModuleInit {
  /**
   *
   */
  constructor(private readonly service: LongRunningService) {}
  async onModuleInit() {
    if (this.service.getImportantValue() == null) {
      throw new Error('But I needed that important value to continue working');
    }
  }
}
