import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
// This appreducer acts as a global store
export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
