import {$authHost, $authMainHost, $mainHost} from "./index";

export const registration = async (email, username, password) => {
    const pwd_token = await $authHost.post('api/v1/user/register', {email, username, password})
        .then( res => res.data.passport_token)
    const { data } = await $mainHost.post('api/get_jwt', {pwd_token: pwd_token})
    localStorage.setItem('token', data.access_token)
    return data
};

export const login = async (email, password) => {
    const pwd_token = await $authHost.post('api/v1/user/login', {email, password})
        .then( res => res.data.passport_token)
    const { data } = await $mainHost.post('api/get_jwt', {pwd_token: pwd_token})
    localStorage.setItem('token', data.access_token)
    return data
};

export const check = async () => {
    try {
        const {data} = await $authMainHost.get('api/check_jwt')
        return {user: data}
    }
    catch (e) {
        return {error: e}
    }
};

