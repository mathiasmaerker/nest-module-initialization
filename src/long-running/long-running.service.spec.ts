import { Test, TestingModule } from '@nestjs/testing';
import { LongRunningService } from './long-running.service';

describe('LongRunningService', () => {
  let service: LongRunningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LongRunningService],
    }).compile();

    service = module.get<LongRunningService>(LongRunningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
