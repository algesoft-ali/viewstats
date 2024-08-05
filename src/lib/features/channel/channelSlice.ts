import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";

interface ChannelState {
  channelId: string;
  channelName: string;
  channelViews: number;
  channelSubs: number;
  channelCategory: string;
  startDate: string;
  endDate: string;
  type: string;
  channelLoading: boolean;
}

interface SetChannelInfoPayload {
  field: keyof ChannelState;
  value: ChannelState[keyof ChannelState];
}

const initialState: ChannelState = {
  channelId: "",
  channelName: "",
  channelViews: 0,
  channelSubs: 0,
  channelCategory: "",
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
    setChannelInfo(state, action: PayloadAction<SetChannelInfoPayload>) {
      // @ts-ignore
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const {
  setChannelId,
  setDateFilter,
  setFilterType,
  setChannelLoading,
  setChannelInfo,
} = channelSlice.actions;
export default channelSlice.reducer;
