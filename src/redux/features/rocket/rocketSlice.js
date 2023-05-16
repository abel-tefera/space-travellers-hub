import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRocket.fulfilled, (state, action) => {
        const rocketsData = action.payload;
        const selectedRocket = rocketsData.map((rocket) => ({
          id: rocket.id,
          name: rocket.rocket_name,

          description: rocket.description,
          type: rocket.rocket_type,
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

export default rocketSlice.reducer;
