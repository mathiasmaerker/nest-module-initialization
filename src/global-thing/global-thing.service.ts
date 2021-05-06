import { Injectable, OnModuleInit } from '@nestjs/common';
import { LongRunningService } from 'src/long-running/long-running.service';

@Injectable()
export class GlobalThingService implements OnModuleInit {
  private otherThing: string;
  /**
   *
   */
  constructor(private readonly service: LongRunningService) {}
  async onModuleInit() {
    if (this.service.getImportantValue() == null) {
      throw new Error('But I needed that important value to continue working');
    } else {
      this.otherThing = this.service.getImportantValue();
    }
  }
  getIt() {
    return this.otherThing;
  }
}
