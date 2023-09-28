import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateTestDto} from './dto/create-test.dto';
import {UpdateTestDto} from './dto/update-test.dto';
import {PrismaService} from "../prisma/prisma.service";
import {Question} from "@prisma/client";

@Injectable()
export class TestsService {
    constructor(private prisma: PrismaService) {
    }

    create(createTestDto: CreateTestDto) {
        const newTest = this.prisma.test.create({
            data: {
                test_name: createTestDto.test_name,
                category_id: createTestDto.category_id,
            },
            include: {
                category: true,
            },
        })
        if (!newTest) {
            throw new HttpException("Не удалось создать тест", HttpStatus.BAD_REQUEST)
        }
        return newTest
    }

    findAll() {
        return this.prisma.test.findMany({
            include: {
                category: true,
                questions: {
                    include: {
                        answer: true,
                        photo_answer: true
                    },
                    orderBy: {
                        question_name: "desc"
                    }

                }
            },
        })
    }

    async findOne(id: string) {
        const findTest = await this.prisma.test.findFirst({
            where: {
                id

            },
            include: {
                questions: {
                    include: {
                        answer: true,
                        photo_answer: true
                    }
                }
            }
        })
        if (!findTest) {
            throw new HttpException("Тест не найден", HttpStatus.NOT_FOUND)
        }
        const numberOfRandomElements = 17;
        const filterArray = findTest.questions.filter(test => test.photo_answer.length === 0)
        const sourceArray = filterArray;
        const photosArray = findTest.questions.filter(test => test.photo_answer.length > 0)
// Создаем новый массив для хранения случайных элементов
        const randomElementsArray = [];

// Генерируем 20 случайных индексов и добавляем соответствующие элементы в новый массив
        while (randomElementsArray.length < numberOfRandomElements) {
            const randomIndex = Math.floor(Math.random() * sourceArray.length);
            const randomElement = sourceArray[randomIndex];

            // Проверяем, что элемент не был добавлен ранее, чтобы избежать дублирования
            if (!randomElementsArray.includes(randomElement)) {
                randomElementsArray.push(randomElement);
            }
        }
        const result = {
            id: findTest.id,
            test_name: findTest.test_name,
            category_id: findTest.category_id,
            timer: null,
            questions: [...randomElementsArray, ...photosArray],
        }
        return result
    }

    update(id: number, updateTestDto: UpdateTestDto) {
        return `This action updates a #${id} test`;
    }

    remove(id: number) {
        return `This action removes a #${id} test`;
    }
}
