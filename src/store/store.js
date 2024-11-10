import { combineReducers, createStore } from "redux";
import { userReducer } from "./user/userSlice";

export const store = createStore(combineReducers({
    user: userReducer
}))