import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchImagesBegin = () => {
  return {
    type: actionTypes.FETCH_IMAGES_BEGIN,
  };
};
export const fetchImagesFailure = (error) => {
  return {
    type: actionTypes.FETCH_IMAGES_FAILURE,
    payload: error,
  };
};
export const fetchImagesSuccess = ({ data }) => {
  return {
    type: actionTypes.FETCH_IMAGES_SUCCESS,
    payload: data,
  };
};
export const fetchImages = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchImagesBegin());
      const url = process.env.REACT_APP_ARCHIVER_IMAGES_API;
      console.log('images url', url);
      const response = await axios.get(url);
      const apiData = response?.data;
      console.log('apidata', apiData);
      dispatch({
        type: actionTypes.FETCH_IMAGES_SUCCESS,
        payload: apiData,
      });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_IMAGES_FAILURE, payload: error });
    }
  };
};
export const postImages = (postFile) => {
  const postErrorMessage = 'Dosya Gönderilemedi';
  return (dispatch) => {
    const url = process.env.REACT_APP_ARCHIVER_POST_IMAGE_API;
    axios
      .post(url, postFile)
      .then((response) => {
        console.log('post response', response)
        dispatch({
          type:actionTypes.POST_IMAGES_SUCCESS,
          payload:response.data.archiveDto.id
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.POST_IMAGES_FAILURE,
          payload: postErrorMessage,
        });
      });
  };
};
export const getImagesByCategory = (categoryUuid) => {
  console.log('getImagesByCategory',categoryUuid);
  const postErrorMessage = 'Get image for category error';

  return (dispatch) => {
    console.log('return ç.')
    const url = process.env.REACT_APP_ARCHIVER_GET_IMAGE_BY_CATEGORY_API;
    axios
      .post(url, categoryUuid)
      .then((response) => {
        console.log('post response for cat images', response)
        dispatch({
          type:actionTypes.GET_IMAGES_BY_CATEGORY_SUCCESS,
          payload:response.data.archiveList
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.GET_IMAGES_BY_CATEGORY_FAILURE,
          payload: postErrorMessage,
        });
      });
  };
};
