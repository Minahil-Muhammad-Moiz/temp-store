import { ActionTypes } from "../constants/action-types";

const initiaState = {
  products: [
    {
      id: 1,
      title: "xyz",
      category: "abc",
    },
  ],
};

export const itemReducer = (state=initiaState, {type, payload}) => {
  switch (type) {
    case ActionTypes.ADD_ITEMS:
      return state;
    default:
      return state;
  }
};
