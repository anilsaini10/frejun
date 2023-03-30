// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";

// const store = configureStore({ rootReducer:rootReducer });

// export default store;
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/reducers'
// import {counterReducer} from "."

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})