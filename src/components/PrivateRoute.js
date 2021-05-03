import React, {useContext} from "react"
import {Redirect, Route} from "react-router-dom"
import {useAuth} from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest}) {
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            render={ props => {
                return (user && user.isAuth) ? <Component{...props}/> : <Redirect to="/login"/>
            }}
        />
    )
}