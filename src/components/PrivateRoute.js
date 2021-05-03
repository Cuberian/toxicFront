import React from "react"
import {Redirect, Route} from "react-router-dom"
import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest}) {

    const token = useSelector(state => state.auth.user_token);

    return (
        <Route
            {...rest}
            render={ props => {
                return token ? <Component{...props}/> : <Redirect to="/signup"/>
            }}
        />
    )
}