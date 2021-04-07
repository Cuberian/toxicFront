import {FETCH_GROUPS} from "./types";
import {showAlert} from "./action";

export function maxLengthMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            console.log(action)
            if(action.type === FETCH_GROUPS) {
                console.log(action.payload.length);
                if(action.payload && action.payload.length > 5)
                {
                    return dispatch(showAlert("Многовато, нихатю"));
                }
            }
            return next(action)
        }
    }
}