// store.js
import { configureStore , combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/UserSlice.js';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig ={
    key: 'root',
    storage,
    version :1
}

const persistReduce = persistReducer(persistConfig , rootReducer);

export const store = configureStore({
  reducer: persistReduce,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
