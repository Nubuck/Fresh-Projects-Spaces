import { House } from '../../app/models/house.model';
import { Room } from '../../app/models/room.model';

export const HOUSE_DATA: House = {
  title: 'Cozy Family Home',
  description: 'A lovely home in a quiet neighborhood.',
  price: '$550,000',
  address: '123 Main Street, Anytown, USA',
  thumbnail: '/images/thumbnail.jpg',
};

export const ROOM_DATA: Room[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    description: 'Spacious living area with plenty of natural light.',
    photos: [
      '/images/rooms/living-room-1.jpg',
      '/images/rooms/living-room-2.jpg',
    ],
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    description: 'Modern kitchen with new appliances.',
    photos: ['/images/rooms/kitchen-1.jpg', '/images/rooms/kitchen-2.jpg'],
  },
  {
    id: 'bedroom-1',
    name: 'Master Bedroom',
    description: 'Large master bedroom with an en-suite bathroom.',
    photos: [
      '/images/rooms/bedroom-1-1.jpg',
      '/images/rooms/bedroom-1-2.jpg',
    ],
  },
  {
    id: 'bathroom-1',
    name: 'Main Bathroom',
    description: 'Full bathroom with a shower and tub.',
    photos: ['/images/rooms/bathroom-1-1.jpg'],
  },
];