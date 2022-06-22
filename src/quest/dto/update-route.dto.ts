import { ApiProperty } from '@nestjs/swagger';
import { RoutePoint } from './routePoint.entity';

export class UpdateRouteDto {
  @ApiProperty()
  routeTitle: string;
  @ApiProperty()
  routeDescription: string;
  @ApiProperty()
  routePic: string;
  @ApiProperty({ type: () => [RoutePoint] })
  routePoints: RoutePoint;
}
