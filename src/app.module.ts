import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalThingModule } from './global-thing/global-thing.module';
import { LongRunningModule } from './long-running/long-running.module';
import { ConsumerOfGlobalModule } from './consumer-of-global/consumer-of-global.module';

@Module({
  imports: [GlobalThingModule, LongRunningModule, ConsumerOfGlobalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
