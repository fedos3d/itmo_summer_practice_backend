
import {Route} from './route.entity'
import { ApiProperty } from "@nestjs/swagger";


export class RoutePoint {
  @ApiProperty()
  id: number ;
  @ApiProperty()
  latitude: number ;
  @ApiProperty()
  longtitude: number ;
  @ApiProperty()
  text: string ;
  route?: Route  | null;
routeId: number  | null;
}
