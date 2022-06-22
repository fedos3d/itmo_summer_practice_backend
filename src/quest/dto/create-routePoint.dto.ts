import { ApiProperty } from "@nestjs/swagger";


export class CreateRoutePointDto {
  @ApiProperty()
  latitude: number;
  @ApiProperty()
  longtitude: number;
  @ApiProperty()
  text: string;
}
