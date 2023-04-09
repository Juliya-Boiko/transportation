//import storage from 'redux-persist/lib/storage';
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

// import { charactersSlice } from "./characters/charactersSlice";
// import { authSlice } from "./auth/authSlice";
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// const charactersPersistConfig = {
//   key: 'characters',
//   storage,
//   whitelist: ['filter', 'items'],
// };

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['displayName', 'uid', 'accesToken', 'isLogged'],
// };

export const store = configureStore({
  reducer: {
    //characters: persistReducer(charactersPersistConfig, charactersSlice.reducer),
    auth: authSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  // middleware: getDefaultMiddleware => getDefaultMiddleware({
  //   serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
});

//export const persistor = persistStore(store);