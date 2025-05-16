import { defineEventHandler, getRouterParam, createError } from 'h3';
import { PROPERTIES_DATA } from '../../../../data/house-data';

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');
  const property = PROPERTIES_DATA.find(p => p.id === id);

  if (!property) {
    throw createError({ statusCode: 404, statusMessage: 'Property not found' });
  }

  return property;
});
