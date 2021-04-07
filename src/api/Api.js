import axios from "axios";

let BaseApi = axios.create({
    baseURL: "http://pritr"
});

export function Api(){
    let token = localStorage.getItem("token");

    if(token) {
        BaseApi.defaults.params['token'] = token;
    }

    return BaseApi;
}