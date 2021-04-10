import {SET_TOKEN} from "./types";

const initialState = {
    user_token: localStorage.getItem('token'),
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TOKEN:
            return { ...state, user_token: action.payload };
        default: return state
    }
}