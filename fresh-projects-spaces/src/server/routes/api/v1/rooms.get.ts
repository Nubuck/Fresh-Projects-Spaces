import { defineEventHandler } from 'h3';
import { ROOM_DATA } from '@server/data/house-data';

export default defineEventHandler(() => {
  // Return the rooms array from the hardcoded data
 return ROOM_DATA;
});