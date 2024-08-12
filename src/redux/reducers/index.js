import { combineReducers } from "redux";
import { itemReducer, selectedItemsReducer } from "./itemReducer";

const reducers = combineReducers({
  allItems: itemReducer,
  item: selectedItemsReducer,
});
export default reducers;
