import { Test, TestingModule } from '@nestjs/testing';
import { CorrectAnswersController } from './correct-answers.controller';
import { CorrectAnswersService } from './correct-answers.service';

describe('CorrectAnswersController', () => {
  let controller: CorrectAnswersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorrectAnswersController],
      providers: [CorrectAnswersService],
    }).compile();

    controller = module.get<CorrectAnswersController>(CorrectAnswersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
