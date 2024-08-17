import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import detailReducer from "../features/detailSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    detail: detailReducer  
  },
});
