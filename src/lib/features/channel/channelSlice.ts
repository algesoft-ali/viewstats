import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  channelId: "",
  startDate: moment().subtract(28, "days").format("YYYY-MM-DD"),
  endDate: moment().subtract(1, "days").format("YYYY-MM-DD"),
  type: "views",
  channelLoading: true,
};

const channelSlice = createSlice({
  initialState,
  name: "channel",
  reducers: {
    setDateFilter(state, action) {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
    setChannelId(state, action) {
      state.channelId = action.payload;
    },
    setFilterType(state, action) {
      state.type = action.payload;
    },
    setChannelLoading(state, action) {
      state.channelLoading = action.payload;
    },
  },
});

export const { setChannelId, setDateFilter, setFilterType, setChannelLoading } =
  channelSlice.actions;
export default channelSlice.reducer;
