import { createSlice } from "@reduxjs/toolkit";
import { getAllTrips, addTrip } from "./tripsOperations";

const initialState = {
  trips: []
};

export const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getAllTrips.fulfilled, (state, { payload }) => {
      state.trips = [...payload];
    })
    .addCase(addTrip, (state, { payload }) => {
      
    })
  },
});
