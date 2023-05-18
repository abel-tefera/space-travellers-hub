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
  reducers: {
    joinMission: (state, action) => {
      const newState = state.missionsList.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, status: true };
        }
        return { ...mission };
      });
      state.missionsList = newState;
    },
    leaveMission: (state, action) => {
      const newState = state.missionsList.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, status: false };
        }
        return { ...mission };
      });
      state.missionsList = newState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state, _) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const missions = action.payload.map((mission) => ({
          ...mission,
          mission_id: mission.mission_id + Math.floor(Math.random(0, 1) * 1000),
          status: false,
        }));
        state.missionsList = state.missionsList.concat(missions);
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

export const { joinMission } = missionsSlice.actions;
export const { leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
