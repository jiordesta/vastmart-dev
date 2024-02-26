import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "../axios_instance";

const initialState = {
  user: null,
  loading_user: false,
  loading_logout: false,
  loading_login: false,
  loading_register: false,
};

export const signin = createAsyncThunk("/signin", async (inputs) => {
  try {
    const data = new FormData();
    for (const [key, value] of Object.entries(inputs)) {
      data.append(key, value);
    }
    await AxiosInstance.post("/user/signin", data);
    return;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const signup = createAsyncThunk("/signup", async (inputs) => {
  try {
    const data = new FormData();
    for (const [key, value] of Object.entries(inputs)) {
      data.append(key, value);
    }
    AxiosInstance.post("/user/signup", data);
    return;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

const userSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
