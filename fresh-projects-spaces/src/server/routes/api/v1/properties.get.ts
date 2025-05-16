import { defineEventHandler } from 'h3';
import { PROPERTIES_DATA } from '@server/data/house-data';

export default defineEventHandler(() => {
  return PROPERTIES_DATA;
});