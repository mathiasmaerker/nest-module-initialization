import { Module, Global } from '@nestjs/common';
import { LongRunningModule } from 'src/long-running/long-running.module';
import { GlobalThingService } from './global-thing.service';

@Global()
@Module({
  imports: [LongRunningModule],
  providers: [GlobalThingService],
})
export class GlobalThingModule {}
