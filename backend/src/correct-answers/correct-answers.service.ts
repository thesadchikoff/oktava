import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {checkCorrectAnswersDto, CreateCorrectAnswerDto} from './dto/create-correct-answer.dto';
import { UpdateCorrectAnswerDto } from './dto/update-correct-answer.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class CorrectAnswersService {
  constructor(private prisma: PrismaService) {}
  async create(createCorrectAnswerDto: CreateCorrectAnswerDto) {
    console.log(createCorrectAnswerDto.question_id, createCorrectAnswerDto.correct_answer);
    const question = await this.prisma.question.findUnique({
      where: {
        id: createCorrectAnswerDto.question_id
      }
    })
    console.log(question)
    const newCorrectAnswer = await this.prisma.correctAnswer.create({
      data: {
        answer: createCorrectAnswerDto.correct_answer,
        question_id: createCorrectAnswerDto.question_id
      }
    })
    if (!newCorrectAnswer) {
      throw new HttpException("Не удалось создать корректный ответ", HttpStatus.BAD_REQUEST)
    }
    return newCorrectAnswer
  }

  findAll() {
    return `This action returns all correctAnswers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} correctAnswer`;
  }

  async checkCorrectAnswer(dto: checkCorrectAnswersDto) {
    // console.log(dto);
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    const totalAnswers = dto.answers.length
    for (const dtoElement of dto.answers) {
      const correctAnswer = await this.prisma.correctAnswer.findFirst({
        where: {
          question_id: dtoElement.question_id
        }
      })

      if (correctAnswer) {
        if (dtoElement.ans === correctAnswer.answer) {
          correctAnswers++
        } else {
          console.log('Answer from the client: ', dtoElement.ans);
          console.log('Correct answer: ', correctAnswer.answer);
          console.log(false)
          incorrectAnswers++
        }
      }
    }
    const passingPercentage = await (correctAnswers / totalAnswers) * 100
    const completeUserSession = await this.prisma.testingSession.findFirst({
      include: {
        user: true
      },
      where: {
        user_id: dto.user_id
      }
    })
    const changeTestingSession = await this.prisma.testingSession.update({
      where: {
        id: completeUserSession.id
      },
      data: {
        score: passingPercentage * 3,
        is_complete: true,
      },
      include: {
        user: true
      },
    })
    return {
      correct: correctAnswers,
      incorrect: incorrectAnswers,
      percent: Math.round(passingPercentage),
      session: changeTestingSession
    }
  }

  async getSessions() {
    const sessions = await this.prisma.testingSession.findMany({
      where: {
        is_complete: true
      },
      orderBy: {
        score: "desc",
      },
      include: {
        user: {
          select: {
            first_name: true,
            company: true,
            id: true
          }
        }
      }
    })
    if (!sessions) {
      throw new HttpException("Сессии отсутствуют", HttpStatus.NOT_FOUND)
    }
    return sessions
  }

  update(id: number, updateCorrectAnswerDto: UpdateCorrectAnswerDto) {
    return `This action updates a #${id} correctAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} correctAnswer`;
  }
}
