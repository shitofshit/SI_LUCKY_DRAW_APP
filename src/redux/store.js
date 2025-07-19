import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import uiSlice from './slices/uiSlice.jsx';
import participantsSlice from './slices/participantsSlice.jsx';

const persistConfig = {
  key: 'root',
  storage,
  // You can blacklist UI state if you don't want it persisted
  blacklist: ['ui']
};

const rootReducer = combineReducers({
  participants: participantsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);