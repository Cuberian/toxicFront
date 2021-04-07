import {combineReducers} from "redux";
import {groupReducer} from "./groupReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    groups:groupReducer,
    app: appReducer
})