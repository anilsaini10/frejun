import { combineReducers } from "redux";
import updateTheData from "./reducers";


const rootReducer = combineReducers({
    updateTheData: updateTheData
});

export default rootReducer;