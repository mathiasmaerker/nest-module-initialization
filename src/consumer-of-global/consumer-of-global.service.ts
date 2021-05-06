import { Injectable, OnModuleInit } from '@nestjs/common';
import { GlobalThingService } from 'src/global-thing/global-thing.service';

@Injectable()
export class ConsumerOfGlobalService implements OnModuleInit {
  /**
   *
   */
  constructor(private readonly globalThing: GlobalThingService) {}
  async onModuleInit() {
    await new Promise<void>((resolve, reject) => {
      const result = this.globalThing.getIt();
      if (!result) {
        reject(new Error('What did I do wrong again?'));
      } else {
        resolve();
      }
    });
  }
}
