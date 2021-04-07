import {combineReducers} from "redux";
import {groupReducer} from "./groupReducer";
import {appReducer} from "./appReducer";
import {authReducer} from "./authReducer";

export const rootReducer = combineReducers({
    groups:groupReducer,
    app: appReducer,
    auth: authReducer,
})