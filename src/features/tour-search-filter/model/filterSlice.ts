'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IToursSearchFilter } from './types';

const initialState: IToursSearchFilter = {
  accommodations: {
    property_types: [],
    property_names: [],
    room_types: [],
    property_facilities: [],
    meals: [],
    stars: [],
    room_facilities: [],
  },
  transportations: {
    carriers: [],
    cabin_types: [],
    transfer_types: [],
  },
};

const toursSearchFilterSlice = createSlice({
  name: 'toursSearchFilter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<Partial<IToursSearchFilter>>) {
      return { ...state, ...action.payload };
    },
    setPropertyTypes(
      state,
      action: PayloadAction<
        IToursSearchFilter['accommodations']['property_types']
      >
    ) {
      state.accommodations.property_types = action.payload;
    },

    resetFilter() {
      return initialState;
    },

    setRoomTypes(
      state,
      action: PayloadAction<IToursSearchFilter['accommodations']['room_types']>
    ) {
      state.accommodations.room_types = action.payload;
    },
    setPropertyFacilities(
      state,
      action: PayloadAction<
        IToursSearchFilter['accommodations']['property_facilities']
      >
    ) {
      state.accommodations.property_facilities = action.payload;
    },
    setMeals(
      state,
      action: PayloadAction<IToursSearchFilter['accommodations']['meals']>
    ) {
      state.accommodations.meals = action.payload;
    },
    setStars(
      state,
      action: PayloadAction<IToursSearchFilter['accommodations']['stars']>
    ) {
      state.accommodations.stars = action.payload;
    },
    setRoomFacilities(
      state,
      action: PayloadAction<
        IToursSearchFilter['accommodations']['room_facilities']
      >
    ) {
      state.accommodations.room_facilities = action.payload;
    },
    setCarriers(
      state,
      action: PayloadAction<IToursSearchFilter['transportations']['carriers']>
    ) {
      state.transportations.carriers = action.payload;
    },
    setCabinTypes(
      state,
      action: PayloadAction<
        IToursSearchFilter['transportations']['cabin_types']
      >
    ) {
      state.transportations.cabin_types = action.payload;
    },
    setTransferTypes(
      state,
      action: PayloadAction<
        IToursSearchFilter['transportations']['transfer_types']
      >
    ) {
      state.transportations.transfer_types = action.payload;
    },
    setPropertyNames(
      state,
      action: PayloadAction<
        IToursSearchFilter['accommodations']['property_names']
      >
    ) {
      state.accommodations.property_names = action.payload;
    },
  },
});

export const {
  setFilter,
  resetFilter,
  setPropertyTypes,
  setRoomTypes,
  setStars,
  setMeals,
  setRoomFacilities,
  setPropertyFacilities,
  setCarriers,
  setCabinTypes,
  setTransferTypes,
  setPropertyNames,
} = toursSearchFilterSlice.actions;
export default toursSearchFilterSlice.reducer;
