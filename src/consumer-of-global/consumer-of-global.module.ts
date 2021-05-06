import { Module } from '@nestjs/common';
import { ConsumerOfGlobalService } from './consumer-of-global.service';

@Module({
  providers: [ConsumerOfGlobalService]
})
export class ConsumerOfGlobalModule {}
