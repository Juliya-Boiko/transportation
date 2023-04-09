import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { authentication, providerGoogle, providerFacebook} from "services/firebaseConfig";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser', 
  () => {
    return authentication.currentUser;
  }
);

export const authUserGoogle = createAsyncThunk(
  'auth/google',
  async () => {
    const data = await signInWithPopup(authentication, providerGoogle)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        return result.user;
      })
      .catch((error) => {
        console.log('auth/google ---> error', error);
      });
    return data;
  }
);

export const authUserPhone = createAsyncThunk(
  'auth/phone',
  async (value) => {
    let confirmationResult = window.confirmationResult;
    try {
      const user = await confirmationResult.confirm(value).then(result => result.user)
      Notify.success('Verification successfull!');
      return user;
    } catch (error) {
      const message = error.message.split(':')[1];
      Notify.failure(`${message}`);
    }
  }
);

export const authUserFacebook = createAsyncThunk(
  'auth/facebook',
  async () => {
    const data = await signInWithPopup(authentication, providerFacebook)
      .then((result) => {
        return result.user;
      })
      .catch((error) => {
        console.log('auth/facebook ---> error', error);
      });
    return data;
  }
)

export const registerUser = createAsyncThunk(
  'auth/register',
  async (values) => {
    const { email, password } = values;
    try {
      const user = await createUserWithEmailAndPassword(authentication, email, password).then(result => result.user);
      Notify.success('Registration successfull!');
      return user;
    } catch (error) {
      const message = error.message.split(':')[1];
      Notify.failure(`${message}`);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (values) => {
    const { email, password } = values;
    try {
      const user = await signInWithEmailAndPassword(authentication, email, password).then(result => result.user);
      Notify.success('Login successfull!');
      return user;
    } catch (error) {
      const message = error.message.split(':')[1];
      Notify.failure(`${message}`);
    }
  }
)