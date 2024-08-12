import { ActionTypes } from "../constants/action-types";

const initiaState = {
  Items: [],
};

export const itemReducer = (state = initiaState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_ITEMS:
      return { ...state, items: payload };
    default:
      return state;
  }
};

export const selectedItemsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_ITEM:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_ITEM:
      return {};
    default:
      return state;
  }
};
