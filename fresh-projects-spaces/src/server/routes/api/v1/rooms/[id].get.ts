import { defineEventHandler, getRouterParam, createError } from 'h3';
import { ROOM_DATA } from '@server/data/house-data';

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');
  const room = ROOM_DATA.find(r => r.id === id);
  if (!room) {
    throw createError({ statusCode: 404, statusMessage: 'Room not found' });
  }

  return room;
});