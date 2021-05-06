import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerOfGlobalService } from './consumer-of-global.service';

describe('ConsumerOfGlobalService', () => {
  let service: ConsumerOfGlobalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumerOfGlobalService],
    }).compile();

    service = module.get<ConsumerOfGlobalService>(ConsumerOfGlobalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
