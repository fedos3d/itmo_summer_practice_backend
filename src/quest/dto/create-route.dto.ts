import { ApiProperty } from "@nestjs/swagger";
import { RoutePoint } from "./routePoint.entity";

export class CreateRouteDto {
  @ApiProperty()
  routeTitle: string;
  @ApiProperty()
  routeDescription: string;
  @ApiProperty()
  routePic: string;
  @ApiProperty({ type: () => [RoutePoint], })
  routePoints: RoutePoint;
}
