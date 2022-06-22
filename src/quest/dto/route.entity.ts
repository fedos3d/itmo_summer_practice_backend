import { RoutePoint } from './routePoint.entity';

export class Route {
  id: number;
  routeTitle: string;
  routeDescription: string;
  routePoint?: RoutePoint[];
  routePic: string;
}
