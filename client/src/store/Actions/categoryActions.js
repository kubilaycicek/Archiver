import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchCategoriesBegin = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES_BEGIN,
  };
};
export const fetchCategoriesFailure = (error) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAILURE,
    payload: error,
  };
};
export const fetchCategoriesuccess = ({ data }) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: data,
  };
};
export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCategoriesBegin());
      const url = process.env.REACT_APP_ARCHIVER_CATEGORIES_API;
      const response = await axios.get(url);
      const apiData = response?.data;
      dispatch({
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: apiData,
      });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_CATEGORIES_FAILURE, payload: error });
    }
  };
};