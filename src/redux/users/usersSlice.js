import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, updateUserStatus } from "./usersOperations";

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
    .addCase(updateUserStatus, (state, { payload }) => {
      state.users = [...payload];
    })
  },
});