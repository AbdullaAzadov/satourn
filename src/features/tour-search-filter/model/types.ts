import { ISelectOption } from '@/shared/lib/types';

export interface IToursSearchFilter {
  accommodations: {
    property_types: ISelectOption[];
    property_names: string[];
    room_types: ISelectOption[];
    property_facilities: ISelectOption[];
    room_facilities: ISelectOption[];
    meals: ISelectOption[];
    stars: ISelectOption[];
  };
  transportations: {
    carriers: ISelectOption[];
    cabin_types: ISelectOption[];
    transfer_types: ISelectOption[];
  };
}

export const mockToursSearchFilter: IToursSearchFilter = {
  accommodations: {
    property_types: [
      { value: 'hotel', label: 'Отель' },
      { value: 'hostel', label: 'Хостел' },
      { value: 'apartment', label: 'Апартаменты' },
      { value: 'villa', label: 'Вилла' },
      { value: 'guesthouse', label: 'Гостиница' },
    ],
    property_names: [],
    room_types: [
      { value: 'single', label: 'Одноместный номер' },
      { value: 'double', label: 'Двухместный номер' },
      { value: 'suite', label: 'Люкс' },
      { value: 'family', label: 'Семейный номер' },
      { value: 'deluxe', label: 'Делюкс' },
    ],
    property_facilities: [
      { value: 'ocean', label: 'Вид на море' },
      { value: 'breakfast', label: 'Завтрак' },
      { value: 'pool', label: 'Бассейн' },
      { value: 'gym', label: 'Тренажерный зал' },
      { value: 'spa', label: 'Спа' },
    ],
    meals: [
      { value: 'no_meals', label: 'Без питания' },
      { value: 'breakfast', label: 'Завтрак' },
      { value: 'half_board', label: 'Полупансион' },
      { value: 'full_board', label: 'Полное питание' },
      { value: 'all_inclusive', label: 'Все включено' },
    ],
    stars: [
      { value: '1', label: '★' },
      { value: '2', label: '★★' },
      { value: '3', label: '★★★' },
      { value: '4', label: '★★★★' },
      { value: '5', label: '★★★★★' },
    ],
    room_facilities: [
      { value: 'air_conditioner', label: 'Кондиционер' },
      { value: 'tv', label: 'Телевиозор' },
      { value: 'minibar', label: 'Мини-бар' },
      { value: 'balcony', label: 'Балкон' },
      { value: 'wifi', label: 'WI-FI' },
      { value: 'bathroom', label: 'Ванная' },
      { value: 'safe', label: 'Сейф' },
    ],
  },
  transportations: {
    carriers: [
      { value: 'air', label: 'Самоелет' },
      { value: 'train', label: 'Поезд' },
      { value: 'bus', label: 'Автобус' },
      { value: 'ship', label: 'Корабль' },
      { value: 'taxi', label: 'Такси' },
    ],
    cabin_types: [
      { value: 'economy', label: 'Эконом' },
      { value: 'business', label: 'Бизнесс' },
      { value: 'first', label: 'Первый класс' },
    ],
    transfer_types: [
      { value: 'one_way', label: 'В одну сторону' },
      { value: 'round_trip', label: 'В обе стороны' },
    ],
  },
};

export enum ETourSearchFilter {
  hotel = 'Отель',
  hostel = 'Хостел',
  apartment = 'Апартаменты',
  villa = 'Вилла',
  guesthouse = 'Гостевой дом',

  rixos_almaty = 'Rixos Almaty',
  hilton_astana = 'Hilton Astana',
  nomad_inn = 'Nomad Inn',
  green_house_villas = 'Green House Villas',
  skyhostel = 'SkyHostel',

  single = 'Одноместный номер',
  double = 'Двухместный номер',
  suite = 'Люкс',
  family = 'Семейный номер',
  deluxe = 'Делюкс',

  wifi = 'Wi-Fi',
  pool = 'Бассейн',
  parking = 'Парковка',
  gym = 'Тренажёрный зал',
  spa = 'Спа',
  restaurant = 'Ресторан',

  no_meals = 'Без питания',
  breakfast = 'Завтрак',
  half_board = 'Полупансион',
  full_board = 'Полный пансион',
  all_inclusive = 'Всё включено',

  one = '1 звезда',
  two = '2 звезды',
  three = '3 звезды',
  four = '4 звезды',
  five = '5 звёзд',

  air_conditioner = 'Кондиционер',
  tv = 'Телевизор',
  minibar = 'Мини-бар',
  balcony = 'Балкон',
  bathroom = 'Ванная',
  safe = 'Сейф',
}
