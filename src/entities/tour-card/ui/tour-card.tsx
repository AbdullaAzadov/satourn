'use client';
import React from 'react';
import { ITourCard } from '../model/types';
import no_image from '@/../public/assets/images/no-image.png';
import {
  BedSingleIcon,
  CircleCheckIcon,
  HotelIcon,
  MapPinIcon,
  PlaneIcon,
  PlaneTakeoffIcon,
  StarIcon,
  UtensilsIcon,
} from 'lucide-react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { getCurrencyHTML, getTimeDifference } from '../lib/utils';
import { useRouter } from 'next/navigation';

type Props = {
  data: ITourCard;
};

const TourCard = ({ data }: Props) => {
  const router = useRouter();
  const {
    imgSrc,
    hotelName,
    city,
    rating,
    conveniences,
    roomConveniences,
    foodType,
    roomType,
    flights,
    currency,
    price,
  } = data;
  const ratingArray = Array(rating).fill(0);
  const outboundFlightLength = getTimeDifference(
    flights.outbound.departureTime,
    flights.outbound.arrivalTime
  );
  const returnFlightLength = getTimeDifference(
    flights.return.departureTime,
    flights.return.arrivalTime
  );

  return (
    <article
      className='border-border border hover:border-foreground/25 rounded-2xl flex-col overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-all ease-in-out duration-300 flex bg-card text-card-foreground'
      onClick={() => router.push(`/tour/${data.id}`)}
    >
      <img
        src={imgSrc ?? no_image.src}
        alt={hotelName}
        className='w-full h-32 sm:h-48 object-cover'
      />
      <div className='py-3 px-4 md:space-y-1 w-full'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg'>{hotelName}</h3>
          <div className='flex text-sm text-muted-foreground'>
            {ratingArray.map((_, i) => (
              <StarIcon
                key={i}
                className='size-4 stroke-yellow-500 fill-yellow-500'
              />
            ))}
          </div>
        </div>
        <p className='flex gap-0.5 text-sm items-center text-muted-foreground'>
          <MapPinIcon className='size-4' /> {city}
        </p>
        <div className='flex justify-between gap-2 text-indigo-950'>
          <div className='md:space-y-1 py-2  text-sm'>
            {conveniences.map((convenience, index) => (
              <p
                key={index}
                className='flex items-center gap-0.5 line-clamp-1 text-nowrap'
              >
                <CircleCheckIcon className='min-size-4 size-4' /> {convenience}
              </p>
            ))}
            <p className='flex pt-1 items-center gap-0.5 line-clamp-1 text-nowrap'>
              <UtensilsIcon className='min-size-4 size-4' /> {foodType}
            </p>
          </div>

          <div className='md:space-y-1 py-2 text-sm'>
            {roomConveniences.map((convenience, index) => (
              <p
                key={index}
                className='flex items-center gap-0.5 line-clamp-1 text-nowrap'
              >
                <HotelIcon className='min-size-4 size-4' /> {convenience}
              </p>
            ))}
            <p className='flex pt-1 items-center gap-0.5 line-clamp-1 text-nowrap'>
              <BedSingleIcon className='min-size-4 size-4' /> {roomType}
            </p>
          </div>
        </div>
        <div>
          <div className='flex justify-between items-center'>
            <p className='text-muted-foreground text-sm flex items-center gap-1  '>
              туда <PlaneTakeoffIcon className='min-size-4 size-4' />
            </p>
            <p className='text-muted-foreground text-sm flex items-center gap-1 justify-end'>
              <PlaneIcon className='min-size-4 size-4' /> обратно
            </p>
          </div>
        </div>
        <div className='flex justify-between not-md:flex-col'>
          <div className='flex-1'>
            <div className='w-full space-y-0.5 md:space-y-2.5 h-full border-2 p-2'>
              <p className='text-sm flex justify-between items-center'>
                <span>{flights.outbound.departureCity}</span>
                <span>{flights.outbound.arrivalCity}</span>
              </p>
              <p className='text-sm flex justify-between items-center font-bold'>
                <span>
                  {format(flights.outbound.departureTime, 'hh:mm', {
                    locale: ru,
                  })}
                </span>
                <span className='flex-1 mx-2 border-b border-dotted border-gray-400 h-0' />
                <span>{outboundFlightLength.hours}ч</span>
                <span className='flex-1 mx-2 border-b border-dotted border-gray-400 h-0' />
                <span>
                  {format(flights.outbound.arrivalTime, 'hh:mm', {
                    locale: ru,
                  })}
                </span>
              </p>
              <p className='text-xs flex justify-between items-center'>
                <span>Тариф: {flights.outbound.tariff}</span>
                <span>Класс: {flights.outbound.travelClass}</span>
              </p>
            </div>
          </div>
          <div className='flex-1'>
            <div className='w-full space-y-0.5 md:space-y-2.5 h-full border-2 p-2'>
              <p className='text-sm flex justify-between items-center'>
                <span>{flights.return.departureCity}</span>
                <span>{flights.return.arrivalCity}</span>
              </p>
              <p className='text-sm flex justify-between items-center font-bold'>
                <span>
                  {format(flights.return.departureTime, 'hh:mm', {
                    locale: ru,
                  })}
                </span>
                <span className='flex-1 mx-2 border-b border-dotted border-gray-400 h-0' />
                <span>{returnFlightLength.hours}ч</span>
                <span className='flex-1 mx-2 border-b border-dotted border-gray-400 h-0' />
                <span>
                  {format(flights.return.arrivalTime, 'hh:mm', {
                    locale: ru,
                  })}
                </span>
              </p>
              <p className='text-xs flex justify-between items-center'>
                <span>Тариф: {flights.return.tariff}</span>
                <span>Класс: {flights.return.travelClass}</span>
              </p>
            </div>
          </div>
        </div>
        <p className='mt-4 font-semibold text-indigo-950'>
          {Number(price).toLocaleString('ru-RU')} {getCurrencyHTML(currency)}
        </p>
      </div>
    </article>
  );
};

export default TourCard;
