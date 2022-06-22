import { Module } from '@nestjs/common';
import { QuestController } from "./quest.controller";
import { PrismaService } from "../prisma.service";
import { QuestService } from "./quest.service";

@Module({
  controllers: [QuestController],
  providers: [QuestService, PrismaService],
})
export class QuestModule {}
