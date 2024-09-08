import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WebSocketState } from "../types/types";

const initialState: WebSocketState = {
  messages: [],
};

const websocketSlice = createSlice({
  name: "websocket",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = websocketSlice.actions;
export default websocketSlice.reducer;
