import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./types";

const initialState = {
    alert: null,
    loading: false
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return  {...state, loading: false}
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        case HIDE_ALERT:
            return  {...state, alert: null}
        default: return state
    }
}