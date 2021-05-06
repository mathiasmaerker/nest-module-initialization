import { Module } from '@nestjs/common';
import { LongRunningService } from './long-running.service';

@Module({
  providers: [LongRunningService],
  exports: [LongRunningService],
})
export class LongRunningModule {}
