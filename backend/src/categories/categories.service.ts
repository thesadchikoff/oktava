import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {
  }
  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.prisma.category.create({
      data: createCategoryDto,
      include: {
        test: true
      }
    })
    if (!category) throw new HttpException("Ошибка создания категории", HttpStatus.BAD_REQUEST)
    return category
  }

  findAll() {
    return this.prisma.category.findMany({
      include: {
        test: {
          include: {
            _count: true
          }
        }
      }
    })
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findFirst({
      where: {
        id
      },
      include: {
        test: {
          include: {
            _count: true
          }
        }
      }
    })
    if (!category) throw new HttpException("Категория не найдена", HttpStatus.NOT_FOUND)
    return category
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
