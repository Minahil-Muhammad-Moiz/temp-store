import reducers from "./reducers/index";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: reducers,
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});
