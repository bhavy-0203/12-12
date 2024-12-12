import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import API from "../../config/Api";

export const Signup = createAsyncThunk("user/signup", async (user) => {
  try {
    let res = await API.post("/users", user);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

const intialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: intialState,
  reducers: {
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Signup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(Signup.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.isLoggedIn = true;
    });
  },
});

export const { logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
