import { combineReducers } from "redux";
import { AlertReducer } from "./AlertReducer";
import { SignupReducer } from "./SignupReducer";

export const RootAuth = combineReducers({
    auth : SignupReducer,
    alert : AlertReducer
})