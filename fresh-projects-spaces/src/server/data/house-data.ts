import { House } from '../../app/models/house.model';
import { Room } from '../../app/models/room.model';

interface Property {
  id: string;
  house: House;
  rooms: Room[];
}

export const PROPERTIES_DATA: Property[] = [
  // Property 1
  {
    id: 'property-1',
    house: {
      title: 'Cozy Family Home',
      description: 'A lovely home in a quiet neighborhood.',
      price: '$550,000',
      address: '123 Main Street, Anytown, USA',
      thumbnail: '/images/thumbnail.jpg', // Placeholder thumbnail
    },
    rooms: [
      {
        id: 'living-room',
        name: 'Living Room',
        description: 'Spacious living area with plenty of natural light.',
        photos: [
          '/images/rooms/living-room-1.jpg', // Placeholder photo
          '/images/rooms/living-room-2.jpg', // Placeholder photo
        ],
      },
      {
        id: 'kitchen',
        name: 'Kitchen',
        description: 'Modern kitchen with new appliances.',
        photos: ['/images/rooms/kitchen-1.jpg', '/images/rooms/kitchen-2.jpg'], // Placeholder photos
      },
      // Add more rooms for Property 1 as needed
    ],
  },
  // Property 2
  {
    id: 'property-2',
    house: {
      title: 'Modern Downtown Apartment',
      description: 'Stylish apartment in the heart of the city.',
      price: '$750,000',
      address: '456 City Avenue, Metropolis, USA',
      thumbnail: '/images/thumbnail-2.jpg', // Placeholder thumbnail
    },
    rooms: [
      {
        id: 'studio-area',
        name: 'Studio Area',
        description: 'Open concept living and sleeping space.',
        photos: ['/images/rooms/studio-1.jpg', '/images/rooms/studio-2.jpg'], // Placeholder photos
      },
      // Add more rooms for Property 2 as needed
    ],
  },
];