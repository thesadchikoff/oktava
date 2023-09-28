import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TestsModule } from './tests/tests.module';
import { QuestionsModule } from './questions/questions.module';
import { CategoriesModule } from './categories/categories.module';
import { AnswersModule } from './answers/answers.module';
import { CorrectAnswersModule } from './correct-answers/correct-answers.module';

@Module({
  imports: [UsersModule, TestsModule, QuestionsModule, CategoriesModule, AnswersModule, CorrectAnswersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
