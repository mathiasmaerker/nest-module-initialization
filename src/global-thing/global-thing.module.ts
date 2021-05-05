import { Module, Global } from '@nestjs/common';
import { LongRunningModule } from 'src/long-running/long-running.module';
import { LongRunningService } from 'src/long-running/long-running.service';
import { GlobalThingService } from './global-thing.service';

@Global()
@Module({
  imports: [LongRunningModule],
  providers: [GlobalThingService, LongRunningService],
})
export class GlobalThingModule {}
