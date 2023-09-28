import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateQuestionDto} from './dto/create-question.dto';
import {UpdateQuestionDto} from './dto/update-question.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}
  async create(createQuestionDto: CreateQuestionDto) {
    const newQuestion = await this.prisma.question.create({
      data: {
        test_id: "f45467ab-e008-4e5c-83fb-755cef4a017b",
        question_name: createQuestionDto.question_name,
        question_description: createQuestionDto.question_name
      }
    })
    for (const answerData of createQuestionDto.answers) {
      const resultNewAnswers = await this.prisma.answer.create({
        data: {
          answer: answerData.answer_name,
          question_id: newQuestion.id
        }
      })
      if (!resultNewAnswers) {
        throw new HttpException("Не удалось создать", HttpStatus.BAD_REQUEST)
      }
    }
    const newCorrectAnswer = await this.prisma.correctAnswer.create({
      data: {
        question_id: newQuestion.id,
        answer: createQuestionDto.correct_answer
      }
    })
    if (createQuestionDto.photo_answers.length > 0) {
      for (const answerData of createQuestionDto.photo_answers) {
        const resultNewPhotoAnswers = await this.prisma.photoAnswer.create({
          data: {
            photo_url: answerData.answer_name,
            question_id: newQuestion.id
          }
        })
        if (!resultNewPhotoAnswers) {
          throw new HttpException("Не удалось создать", HttpStatus.BAD_REQUEST)
        }
      }
    }
    if (!newQuestion && !newCorrectAnswer) {
      throw new HttpException("Не удалось создать", HttpStatus.BAD_REQUEST)
    }
    return {
      question: newQuestion,
      correct_answer: newCorrectAnswer,
    }
  }

  findAll() {
    return `This action returns all questions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return "This action removes a #${id} question";
  }
}
