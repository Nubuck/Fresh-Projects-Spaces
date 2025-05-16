import { House } from './house.model';
import { Room } from './room.model';

export interface Property {
  id: string;
  house: House;
  rooms: Room[];
}