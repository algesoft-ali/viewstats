import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import themeSlice from "./features/theme/themeSlice";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  theme: themeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gdm) => gdm().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
