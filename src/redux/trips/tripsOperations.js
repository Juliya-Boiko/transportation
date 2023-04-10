import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "services/firebaseConfig";
import { collection, getDocs } from "firebase/firestore"; 

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