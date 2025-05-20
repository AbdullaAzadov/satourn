import { cn } from '@/shared/cn/lib/utils';
import { CustomSearchSelect } from '@/shared/ui/customSearchSelect';
import React from 'react';
import { mockPlaces } from '../lib/data';

type Props = {
  className?: string;
  isFrom?: boolean;
  value: string;
  setValue: (value: string) => void;
};

const TourSearchCitySelector = ({
  className,
  isFrom,
  value,
  setValue,
}: Props) => {
  const selectedValue = mockPlaces.find((item) => item.value === value)?.label;
  return (
    <CustomSearchSelect
      options={mockPlaces}
      value={value}
      setValue={setValue}
      trigger={
        <div
          className={cn(
            'p-1 md:p-4 flex flex-col gap-1 not-md:justify-center',
            className
          )}
        >
          <span className='text-xs md:text-sm text-muted-foreground'>
            {isFrom ? 'Откуда' : 'Куда'}
          </span>

          <div className={cn('text-sm md:text-base')}>
            {selectedValue ? selectedValue : 'Выберите город'}
          </div>
        </div>
      }
    />
  );
};

export default TourSearchCitySelector;
