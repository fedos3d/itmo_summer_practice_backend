import { ApiProperty } from "@nestjs/swagger";


export class UpdateRouteDto {
  @ApiProperty()
  routeTitle?: string;
  @ApiProperty()
  routeDescription?: string;
  @ApiProperty()
  routePic?: string;
}
