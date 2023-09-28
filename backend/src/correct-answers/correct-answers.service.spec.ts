import { Test, TestingModule } from '@nestjs/testing';
import { CorrectAnswersService } from './correct-answers.service';

describe('CorrectAnswersService', () => {
  let service: CorrectAnswersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorrectAnswersService],
    }).compile();

    service = module.get<CorrectAnswersService>(CorrectAnswersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
