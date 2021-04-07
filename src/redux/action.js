import {REQUEST_GROUPS, GET_GROUPS, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER, SET_TOKEN} from "./types";
import axios from "axios";

export function setTokenFromLS(token) {
    return dispatch => {
            dispatch({type: SET_TOKEN, payload: token})
    }
}

export function login(signUpData) {
    return async dispatch => {
        try {

            const passportResponse = await axios.post('http://127.0.0.1:8000/api/v1/user/login',
                signUpData);
            const pwd_token = await passportResponse.data;

            console.log(pwd_token);

            const mainApiResponse = await axios.post('http://main-api/api/get_jwt',
                {'pwd_token': pwd_token.passport_token});
            const jwt_token = await mainApiResponse.data;
            console.log(jwt_token);

            localStorage.setItem('token', jwt_token.access_token)
            dispatch({type: SET_TOKEN, payload: jwt_token.access_token})

        } catch(e) {
            dispatch(showAlert('Что-то пошло не так, малятки'));
            dispatch(hideLoader());
        }
    }
}

export function getGroups(groups) {
    return {
        type: GET_GROUPS,
        payload: groups
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text='Неизвестная ошибка') {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function fetchGroups() {
    return {
        type: REQUEST_GROUPS
    }
}