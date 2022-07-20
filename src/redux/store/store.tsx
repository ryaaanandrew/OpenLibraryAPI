import { combineReducers } from "@reduxjs/toolkit";
import searchBookReducer from "../../Pages/SearchBook/utilities/searchBookSlice";

const store: any = combineReducers({
  searchBookReducer,
});

export default store;
