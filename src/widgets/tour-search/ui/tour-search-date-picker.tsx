import { cn } from '@/shared/cn/lib/utils';
import useScreen from '@/shared/hooks/useScreen';
import DateRangePicker from '@/shared/ui/dateRangePicker';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { DateRange } from 'react-day-picker';

type Props = {
  className?: string;
};

const TourSearchDatePicker = ({ className }: Props) => {
  const [selectedDate, setSelectedDate] = React.useState<DateRange | undefined>(
    undefined
  );
  const { lg } = useScreen();
  const numberOfMonths = lg ? 2 : 1;

  return (
    <DateRangePicker
      onChangeDate={setSelectedDate}
      className={cn(className)}
      numberOfMonths={numberOfMonths}
      customTrigger={
        <div
          className={cn(
            'p-1 md:p-4 flex flex-col gap-1 not-md:justify-center',
            className
          )}
        >
          <span className='text-xs md:text-sm text-muted-foreground'>Дата</span>
          <div className={cn('flex items-center gap-2')}>
            <CalendarIcon className='size-5' />
            {selectedDate?.from ? (
              selectedDate.to ? (
                <span className='text-sm md:text-base'>
                  {format(selectedDate.from, 'dd LLL', { locale: ru })} -{' '}
                  {format(selectedDate.to, 'dd LLL', { locale: ru })}
                </span>
              ) : (
                <span className='text-sm md:text-base'>
                  {format(selectedDate.from, 'LLL dd, y', { locale: ru })}
                </span>
              )
            ) : (
              <span className='text-sm md:text-base'>Выберите дату</span>
            )}
          </div>
        </div>
      }
    />
  );
};

export default TourSearchDatePicker;
