import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import UserStore from "../store/UserStore";

const AuthContext = React.createContext(null)

export function useAuth() {
    return useContext(AuthContext);
}


function AuthProvider({children}) {

    const value = {
        user: new UserStore()
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;