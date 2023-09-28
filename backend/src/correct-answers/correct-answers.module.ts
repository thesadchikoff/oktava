import { Module } from '@nestjs/common';
import { CorrectAnswersService } from './correct-answers.service';
import { CorrectAnswersController } from './correct-answers.controller';
import {PrismaService} from "../prisma/prisma.service";

@Module({
  controllers: [CorrectAnswersController],
  providers: [CorrectAnswersService, PrismaService]
})
export class CorrectAnswersModule {}
