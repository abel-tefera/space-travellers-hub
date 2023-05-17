import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { MISSIONS_URL } from '../constants';

const initialState = {
  missionsList: [],
  status: 'idle',
  error: null,
};

export const fetchMissions = createAsyncThunk('GET_MISSIONS', async () => {
  const response = await axios.get(`${MISSIONS_URL}`);
  return response.data;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state, _) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missionsList = state.missionsList.concat(action.payload);
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllMissions = (state) => state.missions.missionsList;
export const getMissionsStatus = (state) => state.missions.status;
export const getMissionsError = (state) => state.missions.error;

export default missionsSlice.reducer;
