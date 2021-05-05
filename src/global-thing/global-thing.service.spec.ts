import { Test, TestingModule } from '@nestjs/testing';
import { GlobalThingService } from './global-thing.service';

describe('GlobalThingService', () => {
  let service: GlobalThingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobalThingService],
    }).compile();

    service = module.get<GlobalThingService>(GlobalThingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
