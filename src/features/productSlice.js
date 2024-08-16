import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  isloading: false,
  error: false,
};

export const fetchData = createAsyncThunk('fetchData', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();  // Parse the JSON data
    // console.log(data)
    return data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isloading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchData.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.error = true;
    });
  },
});

// export const { addProduct, selectedProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
