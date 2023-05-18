import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ROCKETS_URL } from '../constants';

const initialState = {
  rockets: [],
  isLoading: false,
  error: undefined,
};
export const fetchRocket = createAsyncThunk(
  'rocket/fetchRockets',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(ROCKETS_URL);
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch rockets data');
    }
  },
);
export const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      state.rockets = newRockets;
    },
    cancelReserve: (state, action) => {
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      state.rockets = newRockets;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRocket.fulfilled, (state, action) => {
        const rocketsData = action.payload;
        const selectedRocket = rocketsData.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,

          description: rocket.description,
          type: rocket.type,
          flickr_images: rocket.flickr_images[0],

        }));
        state.rockets = selectedRocket;
        state.isLoading = false;
      })
      .addCase(fetchRocket.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});
export const { reserveRocket, cancelReserve } = rocketSlice.actions;
export default rocketSlice.reducer;

