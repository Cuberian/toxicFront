import axios from "axios";

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_AUTH_HOST
})

const $mainHost = axios.create({
    baseURL: process.env.REACT_APP_API_HOST
})

const $authMainHost = axios.create({
    baseURL: process.env.REACT_APP_API_HOST
})

const authInterceptor = config => {
    config.header.authorization  = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authMainHost.interceptors.request.use(authInterceptor)

export {
    $mainHost,
    $authHost,
    $authMainHost
}