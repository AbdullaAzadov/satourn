'use client';
import { mockTours } from '@/entities/tour-card/model/data';
import TourCard from '@/entities/tour-card/ui/tour-card';
import TourSerchFilter from '@/features/tour-search-filter/ui/tourSerchFilter';
import { ISelectOption } from '@/shared/lib/types';
import { CustomSelect } from '@/shared/ui/customSelect';
import TourSearchWidget from '@/widgets/tour-search/ui/tour-search';
import { ArrowUpDownIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const [sortSettings, setSortSettings] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  let sorted = mockTours;
  const [sort, order] = sortSettings.split('-');
  if (sort && order) {
    switch (sort) {
      case 'price':
        sorted = sorted.sort((a, b) => {
          return order === 'MIN' ? a.price - b.price : b.price - a.price;
        });
        break;

      case 'rating':
        sorted = sorted.sort((a, b) => {
          return order === 'MIN' ? a.rating - b.rating : b.rating - a.rating;
        });
        break;

      default:
        break;
    }
  }

  const handleSortChange = (value: string) => {
    const [sort, order] = value.split('-');
    const params = new URLSearchParams(searchParams?.toString());
    if (sort) {
      params.set('sort', sort);
    } else {
      params.delete('sort');
    }
    if (order) {
      params.set('order', order);
    } else {
      params.delete('order');
    }
    router.push(`?${params.toString()}`, { scroll: false });
    setSortSettings(value);
  };

  useEffect(() => {
    if (searchParams) {
      const sort = searchParams.get('sort') ?? '';
      const order = searchParams.get('order') ?? '';
      setSortSettings(`${sort}-${order}`);
    }
  }, []);

  return (
    <div className='space-y-10'>
      <TourSearchWidget />

      <div>
        <div className='flex justify-between items-center'>
          <TourSerchFilter />
          <CustomSelect
            options={sortOptions}
            onChange={handleSortChange}
            customTrigger={
              <div className='flex items-center gap-2'>
                <ArrowUpDownIcon />
                <span className='w-20 overflow-x-hidden sm:w-fit text-ellipsis'>
                  {sortOptions.find((item) => item.value === sortSettings)
                    ?.label ?? 'Сортировка'}
                </span>
              </div>
            }
          />
        </div>

        <div className='grid grid-cols-1 pt-4 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-6'>
          {sorted.map((data) => (
            <TourCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

const sortOptions: ISelectOption[] = [
  { value: 'price-MIN', label: 'Цена по возрастанию' },
  { value: 'price-MAX', label: 'Цена по убыванию' },
  { value: 'rating-MIN', label: 'Рейтинг по возрастанию' },
  { value: 'rating-MAX', label: 'Рейтинг по убыванию' },
];
