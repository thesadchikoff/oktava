import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import {PrismaService} from "../prisma/prisma.service";

@Module({
  controllers: [TestsController],
  providers: [TestsService, PrismaService]
})
export class TestsModule {}
