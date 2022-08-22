import { combineReducers } from "redux";
import { SignupReducer } from "./SignupReducer";

export const RootAuth = combineReducers({
    auth : SignupReducer
})