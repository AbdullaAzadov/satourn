'use client';
import { configureStore } from '@reduxjs/toolkit';
import toursSearchFilterReducer from '@/features/tour-search-filter/model/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const makeStore = () =>
  configureStore({
    reducer: {
      toursSearchFilter: toursSearchFilterReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
