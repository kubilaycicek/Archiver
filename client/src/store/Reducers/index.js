import { combineReducers } from "redux";
import countReducers from "./countReducers";
const rootReducer = combineReducers({countReducers});

export default rootReducer;