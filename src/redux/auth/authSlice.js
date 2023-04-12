import { createSlice } from "@reduxjs/toolkit";
import { authUserGoogle, registerUser, loginUser, authUserPhone, authUserFacebook, logoutUser } from "./authOperations";

const initialState = {
  uid: null,
  accesToken: null,
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(authUserGoogle.fulfilled, (state, { payload }) => {
      state.uid = payload.uid;
      state.accesToken = payload.accessToken;
      state.isLogged = true;
    })
    .addCase(registerUser.fulfilled, (state, { payload }) => {
      state.uid = payload.uid;
      state.accesToken = payload.accessToken;
      state.isLogged = true;
    })
    .addCase(loginUser.fulfilled, (state, { payload }) => {
      state.uid = payload.uid;
      state.accesToken = payload.accessToken;
      state.isLogged = true;
    })
    .addCase(authUserPhone.fulfilled, (state, { payload }) => {
      state.uid = payload.uid;
      state.accesToken = payload.accesToken;
      state.isLogged = true;
    })
    .addCase(authUserFacebook.fulfilled, (state, { payload }) => {
      state.uid = payload.uid;
      state.accesToken = payload.accesToken;
      state.isLogged = true;
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.uid = null;
      state.accesToken = null;
      state.isLogged = false;
    })
  },    
});