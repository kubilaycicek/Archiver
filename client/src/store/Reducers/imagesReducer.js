import * as actionTypes from "../Actions/actionTypes";
import { initialState } from "./initialState";


const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_IMAGES_BEGIN:
      return { ...state, isImageListLoading: true };
    case actionTypes.FETCH_IMAGES_SUCCESS:
      return { ...state, isImageListLoading: false, images: action.payload };
    case actionTypes.FETCH_IMAGES_FAILURE:
      return { ...state, fetchImageError: action.payload };
    case actionTypes.POST_IMAGES_FAILURE:
      return {...state, postImageError: action.payload};
    case actionTypes.POST_IMAGES_SUCCESS:
      return {...state, postImageSuccess: action.payload};
    case actionTypes.GET_IMAGES_BY_CATEGORY_SUCCESS:
      return {...state, imagesByCategories: action.payload};
    default:
      return state;
  }
};

export default imagesReducer;