import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorrectAnswersService } from './correct-answers.service';
import {checkCorrectAnswersDto, CreateCorrectAnswerDto} from './dto/create-correct-answer.dto';
import { UpdateCorrectAnswerDto } from './dto/update-correct-answer.dto';

@Controller('correct-answers')
export class CorrectAnswersController {
  constructor(private readonly correctAnswersService: CorrectAnswersService) {}

  @Post()
  async create(@Body() createCorrectAnswerDto: CreateCorrectAnswerDto) {
    return this.correctAnswersService.create(createCorrectAnswerDto);
  }

  @Get()
  findAll() {
    return this.correctAnswersService.findAll();
  }

  @Post('/check')
  async checkCorrectAnswer(@Body() dto: checkCorrectAnswersDto) {
    return this.correctAnswersService.checkCorrectAnswer(dto)
  }

  @Get('sessions')
  async getSessions() {
    return this.correctAnswersService.getSessions()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.correctAnswersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCorrectAnswerDto: UpdateCorrectAnswerDto) {
    return this.correctAnswersService.update(+id, updateCorrectAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.correctAnswersService.remove(+id);
  }
}
