import {REQUEST_GROUPS, GET_GROUPS, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER, SET_TOKEN} from "./types";
import axios from "axios";
import {AuthException} from "../exceptions";

export function login(email, password) {
    return async dispatch => {
        try {
            dispatch(hideAlert())
            dispatch(showLoader())

            console.log(password);
            const passportResponse = await axios.post(`${process.env.REACT_APP_AUTH_HOST}/api/v1/user/login`,
                {email,password});
            const pwd_token = await passportResponse.data;

           if(pwd_token.message === 'fail')
           {
               throw new AuthException("Некорректные данные пользователя. Проверьте их, пожалуйста");
           }

            const mainApiResponse = await axios.post(`${process.env.REACT_APP_API_HOST}/api/get_jwt`,
                {'pwd_token': pwd_token.passport_token});
            const jwt_token = await mainApiResponse.data;
            console.log(jwt_token);

            localStorage.setItem('token', jwt_token.access_token)
            dispatch({type: SET_TOKEN, payload: jwt_token.access_token})
            dispatch(hideLoader());


        } catch(e) {
            if(e.name === 'AuthException')
            {
                dispatch(showAlert(e.message));
                dispatch(hideLoader());
            }
            else {
                dispatch(showAlert('Проблемы с сервисом авторизации. Повторите попытку позже'));
                dispatch(hideLoader());
            }
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