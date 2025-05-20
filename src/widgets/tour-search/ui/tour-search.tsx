'use client';
import React from 'react';
import TourSearchCitySelector from './tour-search-city-selector';
import TourSearchDatePicker from './tour-search-date-picker';
import TourSearchTouristsSelector from './tour-search-tourists-selector';
import { cn } from '@/shared/cn/lib/utils';

const TourSearchWidget = () => {
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');

  const columnClassName =
    'lg:border-r not-lg:border-b border-stone-500/15 cursor-pointer hover:bg-stone-50 w-full';

  return (
    <div className='w-full border rounded-3xl bg-white border-stone-400/15 shadow-xs flex not-lg:flex-col not-lg:p-2 not-lg:gap-2 overflow-hidden'>
      <TourSearchCitySelector
        value={from}
        setValue={setFrom}
        isFrom
        className={cn(columnClassName, 'flex-[0.15]')}
      />
      <TourSearchCitySelector
        value={to}
        setValue={setTo}
        className={cn(columnClassName, 'flex-[0.15]')}
      />
      <TourSearchDatePicker className={cn(columnClassName, 'flex-[0.25]')} />
      <TourSearchTouristsSelector
        className={cn(columnClassName, 'flex-[0.3]')}
      />
      <button className='flex-[0.15] not-lg:w-fit not-lg:rounded-xl not-lg:py-1.5 not-lg:px-4 bg-indigo-700 shadow-xs hover:bg-indigo-800 text-white text-semibold cursor-pointer transition-colors text-base md:text-xl'>
        Найти
      </button>
    </div>
  );
};

export default TourSearchWidget;
