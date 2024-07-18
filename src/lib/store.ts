import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import channelSlice from "./features/channel/channelSlice";
import themeSlice from "./features/theme/themeSlice";
import userSlice from "./features/user/userSlice";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  theme: themeSlice,
  user: userSlice,
  channel: channelSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gdm) => gdm().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
