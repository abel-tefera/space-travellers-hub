import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketReducer from './rockets/rocketSlice';

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rocket: rocketReducer,
  },
});
