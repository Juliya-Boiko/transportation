import storage from 'redux-persist/lib/storage';
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { tripsSlice } from "./trips/tripsSlice";
import { usersSlice } from "./users/usersSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['uid', 'accesToken', 'isLogged'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    trips: tripsSlice.reducer,
    users: usersSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);