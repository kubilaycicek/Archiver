import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import imagesReducer from "./imagesReducer";

const rootReducer = combineReducers({categoryReducer,imagesReducer});

export default rootReducer;