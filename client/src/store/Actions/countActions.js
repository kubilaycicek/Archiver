import * as actionTypes from './actionTypes';
export const increment = () => {
  return {
    type: actionTypes.COUNT_INCREMENT,
    payload: 1
  };
};
