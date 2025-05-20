'use client';

import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import * as React from 'react';
import { type DateRange } from 'react-day-picker';
import { cn } from '../cn/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../cn/components/ui/popover';
import { Button } from '../cn/components/ui/button';
import { Calendar } from '../cn/components/ui/calendar';
import { Checkbox } from '../cn/components/ui/checkbox';

export default function DateRangePicker({
  className,
  onChangeDate,
  customTrigger,
  numberOfMonths = 1,
}: React.HTMLAttributes<HTMLDivElement> & {
  onChangeDate: (date: DateRange) => void;
  customTrigger?: React.ReactNode;
  numberOfMonths?: number;
}) {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  React.useEffect(() => {
    if (date) onChangeDate(date);
  }, [date, onChangeDate]);

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          {customTrigger ? (
            customTrigger
          ) : (
            <Button
              id='date'
              variant={'outline'}
              className={cn(
                'w-fit min-w-[10rem] justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className='mr-2 h-4 w-4' />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'dd LLL', { locale: ru })} -{' '}
                    {format(date.to, 'dd LLL', { locale: ru })}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y', { locale: ru })
                )
              ) : (
                <span>Выберите дату</span>
              )}
            </Button>
          )}
        </PopoverTrigger>
        <PopoverContent className='w-auto flex flex-col gap-1' align='start'>
          <Calendar
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={numberOfMonths}
            locale={ru}
            className='border rounded-xl border-black/5'
          />
          <div className='flex items-center gap-2 pl-2'>
            <Checkbox id='checkbox' />
            <label htmlFor='checkbox' className='text-sm'>
              &#177; 3 дня
            </label>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
