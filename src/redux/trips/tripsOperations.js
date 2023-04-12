import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "services/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore"; 
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const getAllTrips = createAsyncThunk(
  'trips/getAll',
  async () => {
    const items = [];
    const querySnapshot = await getDocs(collection(db, "trips"));
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data()});
    });
    return items;
  }
);

export const addTrip = createAsyncThunk(
  'trips/addTrip',
  async (values) => {
    try {
      await addDoc(collection(db, "trips"), {
        ...values
      });
      Notify.success('New trip added!');
    } catch (error) {
      console.log(error);
    }
  }
);