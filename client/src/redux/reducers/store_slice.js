import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../axios_instance";

const initialState = {
  stores: [],
  loading_stores: false,
};

export const create_store = createAsyncThunk(
  "/create_store",
  async (inputs) => {
    try {
      const data = new FormData();
      for (const [key, value] of Object.entries(inputs)) {
        data.append(key, value);
      }
      await AxiosInstance.post("/store/create_store", data);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const storeSlice = createSlice({
  name: "store",
  initialState,
  extraReducers: (builder) => {},
});

export default storeSlice.reducer;
