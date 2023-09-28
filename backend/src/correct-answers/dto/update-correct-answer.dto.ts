import { PartialType } from '@nestjs/mapped-types';
import { CreateCorrectAnswerDto } from './create-correct-answer.dto';

export class UpdateCorrectAnswerDto extends PartialType(CreateCorrectAnswerDto) {}
