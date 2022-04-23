import * as actionTypes from "../Actions/actionTypes";
import { initialState } from "./initialState";


const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_BEGIN:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: action.payload };
    case actionTypes.FETCH_CATEGORIES_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;