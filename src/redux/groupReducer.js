import {FETCH_GROUPS, GET_GROUPS} from "./types";

const initialState = {
    groups : [],
    fetchedGroups: []
}

export const groupReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_GROUPS:
            return { ...state, groups: action.payload };
        case FETCH_GROUPS:
            return { ...state, fetchedGroups: action.payload }
        default: return state
    }
}