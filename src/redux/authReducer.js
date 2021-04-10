import {SET_TOKEN} from "./types";

const initialState = {
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TOKEN:
            return { ...state, user: action.payload };
        default: return state
    }
}