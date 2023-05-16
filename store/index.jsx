'use client';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// project imports
import { persistReducer, persistStore } from 'redux-persist';
import progressReducer from './progress';
import storage from './storage';

const combinedReducers = combineReducers({
  progress: progressReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
