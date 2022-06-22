import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Route, Prisma } from '@prisma/client';
import { CreateRouteDto } from './dto/create-route.dto';

@Injectable()
export class QuestService {
  constructor(private dbService: PrismaService) {}

  async getRoute(id: Prisma.RouteWhereUniqueInput): Promise<Route | null> {
    const checroute = await this.dbService.route.count({
      where: id,
    });
    if (checroute == 0) {
      throw new NotFoundException('Route not found');
    }
    const route = this.dbService.route.findUnique({
      where: id,
    });
    return route;
  }

  async getAllRoutes(): Promise<Route[] | null> {
    const route = this.dbService.route.findMany();
    return route;
  }

  async updateRoute(
    id: Prisma.RouteWhereUniqueInput,
    data: Prisma.RouteUpdateInput,
  ): Promise<Route | null> {
    const checkroute = await this.dbService.route.count({
      where: id,
    });
    if (checkroute == 0) {
      throw new NotFoundException('Route not found');
    }
    const route = this.dbService.route.update({
      where: id,
      data,
    });
    return route;
  }

  async createRoute(quest: CreateRouteDto): Promise<Route> {
    const points = quest.routePoints as unknown as Prisma.JsonArray;
    return this.dbService.route.create({
      data: {
        routeTitle: quest.routeTitle,
        routeDescription: quest.routeDescription,
        routePic: quest.routePic,
        routePoint: points,
      },
    });
  }

  async deleteRoute(id: Prisma.RouteWhereUniqueInput): Promise<Route> {
    const checkRoute = await this.dbService.route.count({
      where: id,
    });
    if (checkRoute == 0) {
      throw new NotFoundException('Route not found');
    }
    return this.dbService.route.delete({
      where: id,
    });
  }
}
