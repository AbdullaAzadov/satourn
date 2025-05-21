import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/cn/components/ui/popover';
import { cn } from '@/shared/cn/lib/utils';
import { TSelectOptions } from '@/shared/lib/types';
import { CustomSelect } from '@/shared/ui/customSelect';
import { MinusIcon, PlusIcon, UserIcon } from 'lucide-react';
import React from 'react';

type Props = {
  className?: string;
};

interface IChildren {
  age: number | null;
}

const TourSearchTouristsSelector = ({ className }: Props) => {
  const [adultsCount, setAdultsCount] = React.useState(1);
  const [childrens, setChildrens] = React.useState<IChildren[]>([]);
  const childrensCount = childrens.length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'flex flex-col gap-1 p-1 md:p-2 md:px-4 not-md:justify-center',
            className
          )}
        >
          <span className='text-xs md:text-sm text-muted-foreground'>
            Гостей
          </span>
          <div className='flex gap-2'>
            <UserIcon className='size-6' />
            <p className='flex gap-2 items-center text-sm text-card-foreground md:text-base'>
              {adultsCount} {adultsCount === 1 ? 'взрослый' : 'взрослых'}
              {childrensCount > 0 && (
                <>
                  <span className='text-sm text-muted-foreground'>&#8226;</span>
                  {childrensCount} детей
                </>
              )}
            </p>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <span className='flex-2/3'>Взрослые</span>
          <div className='flex gap-2 items-center flex-1/3  p-1 px-2'>
            <MinusIcon
              className='size-7 text-muted-foreground hover:text-black transition-all cursor-pointer p-1 rounded-full hover:bg-stone-100/80 select-none'
              onClick={() => setAdultsCount((prev) => Math.max(1, prev - 1))}
            />
            <span className='select-none'>{adultsCount}</span>
            <PlusIcon
              className='size-7 text-muted-foreground hover:text-black transition-all cursor-pointer p-1 rounded-full hover:bg-stone-100/80 select-none'
              onClick={() => setAdultsCount((prev) => Math.min(15, prev + 1))}
            />
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <span className='flex-2/3'>Дети</span>
          <div className='flex gap-2 items-center flex-1/3 p-1 px-2'>
            <MinusIcon
              className='size-7 text-muted-foreground hover:text-black transition-all cursor-pointer p-1 rounded-full hover:bg-stone-100/80 select-none'
              onClick={() =>
                setChildrens((prev) => prev.slice(0, prev.length - 1))
              }
            />
            <span className='select-none'>{childrensCount}</span>
            <PlusIcon
              className='size-7 text-muted-foreground hover:text-black transition-all cursor-pointer p-1 rounded-full hover:bg-stone-100/80 select-none'
              onClick={() =>
                childrensCount < 10 &&
                setChildrens((prev) => [...prev, { age: null }])
              }
            />
          </div>
        </div>
        {childrensCount > 0 && (
          <div className='flex flex-col gap-2'>
            <span className='text-sm text-muted-foreground'>
              Укажите возрасты детей
            </span>
            <div className='grid grid-cols-2 gap-1'>
              {childrens.map((_, index) => (
                <CustomSelect
                  triggerClassName='w-full'
                  triggerPlaceholder='возраст...'
                  key={index}
                  options={childAges}
                  onChange={(value) =>
                    setChildrens((prev) =>
                      prev.map((item, itemIndex) =>
                        itemIndex === index ? { ...item, age: +value } : item
                      )
                    )
                  }
                />
              ))}
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default TourSearchTouristsSelector;

const childAges: TSelectOptions = [
  {
    value: '0',
    label: '0 лет',
  },
  {
    value: '1',
    label: '1 год',
  },
  {
    value: '2',
    label: '2 года',
  },
  {
    value: '3',
    label: '3 года',
  },
  {
    value: '4',
    label: '4 года',
  },
  {
    value: '5',
    label: '5 лет',
  },
  {
    value: '6',
    label: '6 лет',
  },
  {
    value: '7',
    label: '7 лет',
  },
  {
    value: '8',
    label: '8 лет',
  },
  {
    value: '9',
    label: '9 лет',
  },
  {
    value: '10',
    label: '10 лет',
  },
  {
    value: '11',
    label: '11 лет',
  },
  {
    value: '12',
    label: '12 лет',
  },
  {
    value: '13',
    label: '13 лет',
  },
  {
    value: '14',
    label: '14 лет',
  },
  {
    value: '15',
    label: '15 лет',
  },
  {
    value: '16',
    label: '16 лет',
  },
  {
    value: '17',
    label: '17 лет',
  },
];
