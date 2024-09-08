import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./apiSlice";
import websocketReducer from "./websocketSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    websocket: websocketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
