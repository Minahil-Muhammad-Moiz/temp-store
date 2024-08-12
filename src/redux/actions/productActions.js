import { ActionTypes } from "../constants/action-types"

export const addItems = (items)=>{
    return {
        type: ActionTypes.ADD_ITEMS,
        paylaod: items,
    }
}

export const selectedItem = (item)=>{
    return {
        type: ActionTypes.SELECTED_ITEM,
        paylaod: item,
    }
}

export const removeSelectedItem = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_ITEM,
    };
  };