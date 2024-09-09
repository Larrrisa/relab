import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UsersState } from "../types/types";

const initialState: UsersState = {
  total: 15,
  per_page: 5,
  page: 1,
  limit: 5,
  offset: 0,
  items: [],
  loading: "idle",
  error: undefined,
};

export const fetchUsers = createAsyncThunk(
  "/fetchUsers",
  async ({ limit, offset }: { limit: number; offset: number }) => {
    const response = await axios.get(
      `https://test.dev-relabs.ru/api/users/list`,
      {
        params: { limit, offset },
      }
    );
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
      state.offset = (state.page - 1) * state.limit;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<UsersState>) => {
          state.loading = "succeeded";
          state.items = action.payload.items;
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "Failed to fetch";
      });
  },
});

export const { setPage } = usersSlice.actions;
export default usersSlice.reducer;
