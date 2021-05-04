import React, {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom'
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const PrivateRoute = observer(({component: Component, ...rest}) => {

    const { user } = useContext(Context)

    return (
        <Route
            {...rest}
            render={ props => {
                return user.isAuth ? <Component {...props} /> : <Redirect to='/login'/>
            }}/>
    );
})

export default PrivateRoute;