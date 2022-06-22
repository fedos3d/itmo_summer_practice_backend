import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  Body,
  ParseIntPipe,
  Put,
} from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { QuestService } from './quest.service';
import { Route } from '@prisma/client';
import { UpdateRouteDto } from './dto/update-route.dto';
import { CreateRouteDto } from './dto/create-route.dto';

@ApiTags('Quest')
@Controller('Quest')
export class QuestController {
  constructor(private readonly questService: QuestService) {}

  @ApiOperation({
    summary: "Get quest by it's id",
  })
  @ApiNotFoundResponse({ description: 'Not found' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Get(':id')
  async getQuest(@Param('id', ParseIntPipe) id: number): Promise<Route> {
    return await this.questService.getRoute({ id });
  }

  @ApiOperation({
    summary: 'Update quest',
  })
  @ApiNotFoundResponse({ description: 'Not found' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Put(':id')
  async updateQuest(
    @Param('id', ParseIntPipe) id: number,
    @Body() route: UpdateRouteDto,
  ): Promise<Route> {
    return this.questService.updateRoute({ id }, route);
  }

  @ApiOperation({
    summary: 'Add quest',
  })
  @ApiCreatedResponse({
    description: 'quest added.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Post()
  async addQuest(@Body() route: CreateRouteDto): Promise<Route> {
    return await this.questService.createRoute(route);
  }

  @ApiOperation({
    summary: 'Delete quest by id',
  })
  @ApiNotFoundResponse({ description: 'Not found' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Delete(':id')
  async deleteQuest(@Param('id', ParseIntPipe) id: number): Promise<Route> {
    return this.questService.deleteRoute({ id });
  }

  @ApiOperation({
    summary: 'Get all quests',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  @ApiOkResponse({ description: 'Successful request.' })
  @Get()
  async getQuests(): Promise<Route[]> {
    return this.questService.getAllRoutes();
  }
}
