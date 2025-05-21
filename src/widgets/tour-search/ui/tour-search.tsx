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
    'lg:border-r not-lg:border-b border-border cursor-pointer hover:bg-card-foreground/3 transition-colors w-full';

  return (
    <div className='w-full border rounded-3xl bg-card border-border shadow-xs flex not-lg:flex-col not-lg:p-2 not-lg:gap-2 overflow-hidden'>
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
      <button className='flex-[0.15] not-lg:w-fit not-lg:rounded-xl not-lg:py-1.5 not-lg:px-4 bg-primary cursor-pointer hover:bg-primary/85  transition-colors text-base md:text-xl text-primary-foreground'>
        Найти
      </button>
    </div>
  );
};

export default TourSearchWidget;
