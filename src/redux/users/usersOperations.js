import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "services/firebaseConfig";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const getAllUsers = createAsyncThunk(
  'users/getAll',
  async () => {
    try {
      const items = [];
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data()});
      });
      return items;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateUserStatus = createAsyncThunk(
  'users/update',
  async (values) => {
    const { id, status } = values;
    try {
      const ref = doc(db, "users", id);
      await updateDoc(ref, { status });
      Notify.success('Status updated successfull!');
    } catch (error) {
      console.log(error);
    }
  }
);
