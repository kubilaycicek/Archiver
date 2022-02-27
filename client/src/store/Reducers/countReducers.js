import * as actionTypes from '../Actions/actionTypes';
import { initialState } from './initialState'; 


const  countReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNT_INCREMENT:
      return {...state, count: state.count + 1}
    default:
      return state;
  }
}

export default countReducers;