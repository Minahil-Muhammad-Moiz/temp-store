import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  isloading: false,
  error: false,
};

export const fetchDetail = createAsyncThunk("fetchData", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  // console.log(data)
  return data;
});

const detailSlice = createSlice({
  name: "detail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.isloading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchDetail.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(fetchDetail.rejected, (state) => {
      state.error = true;
    });
  },
});

export const { removeSelectedItem } = detailSlice.actions;
export default detailSlice.reducer;
