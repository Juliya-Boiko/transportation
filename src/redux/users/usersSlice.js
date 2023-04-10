import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./usersOperations";

const initialState = {
  users: []
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.users = [...payload];
    })
  },
});