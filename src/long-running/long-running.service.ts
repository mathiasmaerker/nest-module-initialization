import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class LongRunningService implements OnModuleInit {
  private importantValue: string;
  async onModuleInit() {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        this.importantValue = 'done';
        resolve();
      }, 5000);
    });
  }
  getImportantValue() {
    return this.importantValue;
  }
}
