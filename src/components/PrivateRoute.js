import React from "react"
import {Redirect, Route} from "react-router-dom"

export default function PrivateRoute({ component: Component, ...rest}) {

    return (
        <Route
            {...rest}
            render={ props => {
                return true ? <Component{...props}/> : <Redirect to="/signup"/>
            }}
        />
    )
}