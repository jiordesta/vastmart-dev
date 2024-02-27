import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../axios_instance";

const initialState = {
  stores: [],
  loading_stores: false,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  extraReducers: (builder) => {},
});
