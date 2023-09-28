import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateAnswerDto, CreateCorrectAnswerDto} from './dto/create-answer.dto';
import {UpdateAnswerDto} from './dto/update-answer.dto';
import {PrismaService} from "../prisma/prisma.service";


@Injectable()
export class AnswersService {
    constructor(private prisma: PrismaService) {}

    async create(createAnswerDto: CreateAnswerDto) {
        createAnswerDto.answers.map(async (a) => {
            const createNewAnswer = await this.prisma.answer.create({
                data: {
                    answer: a.answer,
                    question_id: a.question_id
                },
                include: {
                    question: true
                }
            })
            if (!createNewAnswer) {
                throw new HttpException("Не удалость создать ответ на вопрос", HttpStatus.BAD_REQUEST)
            }
            return createNewAnswer
        })
    }

    // async createCorrectAnswer(dto: CreateCorrectAnswerDto) {
    //     console.log(dto);
    //     const question = await this.prisma.question.findUnique({
    //         where: {
    //             id: dto.question_id
    //         }
    //     })
    //     console.log(question)
    //     const newCorrectAnswer = await this.prisma.correctAnswer.create({
    //         data: {
    //             answer: dto.correct_answer,
    //             question_id: question.id
    //         }
    //     })
    //     if (!newCorrectAnswer) {
    //         throw new HttpException("Не удалось создать корректный ответ", HttpStatus.BAD_REQUEST)
    //     }
    //     return newCorrectAnswer
    // }

    findAll() {
        return this.prisma.answer.findMany({
            include: {
                question: true
            }
        })
    }

    findOne(id: number) {
        return `This action returns a #${id} answer`;
    }

    update(id: number, updateAnswerDto: UpdateAnswerDto) {
        return `This action updates a #${id} answer`;
    }

    remove(id: number) {
        return `This action removes a #${id} answer`;
    }
}
