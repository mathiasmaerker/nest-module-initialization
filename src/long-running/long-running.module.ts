import { Module } from '@nestjs/common';
import { LongRunningService } from './long-running.service';

@Module({
  providers: [LongRunningService]
})
export class LongRunningModule {}
