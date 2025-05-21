'use client';
import { Button } from '@/shared/cn/components/ui/button';
import CustomModal from '@/shared/ui/customModal';
import { SlidersHorizontalIcon } from 'lucide-react';
import React from 'react';
import { mockToursSearchFilter } from '../model/types';
import { DialogClose } from '@/shared/cn/components/ui/dialog';
import { Input } from '@/shared/cn/components/ui/input';
import TagsSelector from '@/shared/ui/tagsSelector';
import { useAppDispatch, useAppSelector } from '@/app/store';
import {
  resetFilter,
  setCabinTypes,
  setCarriers,
  setMeals,
  setPropertyFacilities,
  setPropertyNames,
  setPropertyTypes,
  setRoomFacilities,
  setRoomTypes,
  setStars,
  setTransferTypes,
} from '../model/filterSlice';

const TourSerchFilter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.toursSearchFilter);
  const { accommodations, transportations } = mockToursSearchFilter;

  const handleResetFilter = () => {
    dispatch(resetFilter());
  };

  return (
    <CustomModal
      trigger={
        <Button variant='outline'>
          <SlidersHorizontalIcon /> Фильтры
        </Button>
      }
      header='Фильтры'
      footer={
        <div className='flex justify-end gap-2 pt-4'>
          <Button variant='outline' onClick={handleResetFilter}>
            Сбросить
          </Button>
          <DialogClose asChild>
            <Button>Применить</Button>
          </DialogClose>
        </div>
      }
      footerCanClose={false}
    >
      <div className='space-y-6'>
        <div className='space-y-2'>
          <h2 className='text-base md:text-lg'>Тип проживания:</h2>
          <TagsSelector
            tags={accommodations.property_types}
            selectedTags={filter.accommodations.property_types}
            onChange={(data) => dispatch(setPropertyTypes(data))}
          />
        </div>

        <div className='space-y-2'>
          <h2 className='text-base md:text-lg'>По названию:</h2>
          <Input
            className='w-full sm:w-2/4'
            value={filter.accommodations.property_names[0] ?? ''}
            onChange={(e) => dispatch(setPropertyNames([e.target.value]))}
            placeholder='Введите название...'
          />
        </div>

        <div className='space-y-2'>
          <h2 className='text-base md:text-lg'>Звезды:</h2>
          <TagsSelector
            tags={accommodations.stars}
            selectedTags={filter.accommodations.stars}
            onChange={(data) => dispatch(setStars(data))}
            itemClassName='text-yellow-400'
          />
        </div>

        <div className='space-y-2'>
          <h2 className='text-base md:text-lg'>Тип питания:</h2>
          <TagsSelector
            tags={accommodations.meals}
            selectedTags={filter.accommodations.meals}
            onChange={(data) => dispatch(setMeals(data))}
          />
        </div>

        <div className='space-y-2'>
          <h2 className='text-base md:text-lg'>Тип номера:</h2>
          <TagsSelector
            tags={accommodations.room_types}
            selectedTags={filter.accommodations.room_types}
            onChange={(data) => dispatch(setRoomTypes(data))}
          />
        </div>

        <div className='space-y-2'>
          <h2 className='text-base md:text-lg'>Удобства:</h2>
          <TagsSelector
            tags={accommodations.property_facilities}
            selectedTags={filter.accommodations.property_facilities}
            onChange={(data) => dispatch(setPropertyFacilities(data))}
          />
        </div>

        <div className='space-y-2'>
          <h2 className='text-base md:text-lg'>Удобства номера:</h2>
          <TagsSelector
            tags={accommodations.room_facilities}
            selectedTags={filter.accommodations.room_facilities}
            onChange={(data) => dispatch(setRoomFacilities(data))}
          />
        </div>

        <hr className='px-4' />

        <div className='space-y-2'>
          <h2 className='text-base md:text-lg'>Тип транспорта:</h2>
          <TagsSelector
            tags={transportations.carriers}
            selectedTags={filter.transportations.carriers}
            onChange={(data) => dispatch(setCarriers(data))}
          />
        </div>

        <div className='flex items-center justify-between'>
          <div className='space-y-2'>
            <h2 className='text-base md:text-lg'>Класс:</h2>
            <TagsSelector
              tags={transportations.cabin_types}
              selectedTags={filter.transportations.cabin_types}
              onChange={(data) => dispatch(setCabinTypes(data))}
            />
          </div>

          <div className='space-y-2'>
            <h2 className='text-base md:text-lg'>Тип перелетов:</h2>
            <TagsSelector
              tags={transportations.transfer_types}
              selectedTags={filter.transportations.transfer_types}
              onChange={(data) => dispatch(setTransferTypes(data))}
            />
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default TourSerchFilter;
