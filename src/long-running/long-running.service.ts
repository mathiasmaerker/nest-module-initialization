import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class LongRunningService implements OnModuleInit {
  private importantValue: string;
  async onModuleInit() {
    setTimeout(() => {
      this.importantValue = 'done';
    }, 5000);
  }
  getImportantValue() {
    return this.importantValue;
  }
}
