import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";

const AuthContext = React.createContext(null)

export function useAuth() {
    return useContext(AuthContext);
}


function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()

    async function login(email, password) {
        const passportResponse = await axios.post(`${process.env.REACT_APP_AUTH_HOST}/api/v1/user/login`,
            {email,password});
        const pwd_token = await passportResponse.data;

        const mainApiResponse = await axios.post(`${process.env.REACT_APP_API_HOST}/api/get_jwt`,
            {'pwd_token': pwd_token.passport_token});
        const jwt_token = await mainApiResponse.data;
        console.log(jwt_token);

        localStorage.setItem('token', jwt_token.access_token)

    }

    async function register(email, password) {
        const passportResponse = await axios.post(`${process.env.REACT_APP_AUTH_HOST}/api/v1/user/register`,
            {email,password});
        const pwd_token = await passportResponse.data;

        const mainApiResponse = await axios.post(`${process.env.REACT_APP_API_HOST}/api/get_jwt`,
            {'pwd_token': pwd_token.passport_token});
        const jwt_token = await mainApiResponse.data;
        console.log(jwt_token);

        localStorage.setItem('token', jwt_token.access_token)
    }


    const value = {
        currentUser,
        login,
        register,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;