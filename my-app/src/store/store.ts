import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './reducers/UserSlice';
import { postAPI } from '../services/PostService';

const rootReducer = combineReducers({
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(postAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
