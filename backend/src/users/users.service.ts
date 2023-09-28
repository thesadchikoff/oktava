import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {
  }
  async create(createUserDto: CreateUserDto) {
    const validateUser = await this.prisma.user.findFirst({
      where: {
        email: createUserDto.email
      }
    })
    if (validateUser) {
      throw new HttpException(`Почтовый адрес ${createUserDto.email} уже использовался`, HttpStatus.BAD_REQUEST)
    }
    const user = await this.prisma.user.create({
      data: {
        first_name: createUserDto.name,
        email: createUserDto.email,
        phone: String(createUserDto.phone),
        company: createUserDto.company
      }
    })
    await this.prisma.testingSession.create({
      data: {
        user_id: user.id,
        score: 0
      }
    })
    return user
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id
      }
    })
    if (!user) {
      throw new HttpException("Участник не найден", HttpStatus.NOT_FOUND)
    }
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
