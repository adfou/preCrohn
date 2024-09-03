import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Uses localStorage for web
import rootReducer from './reducers'; // Adjust this path as needed

// Configuration object for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'questionnaire'], // State slices you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
