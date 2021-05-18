import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {publicRoutes, authRoutes} from "../routes";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {

    return (
        <>
            <Switch>
                {authRoutes.map(({path, Component}) =>
                    <PrivateRoute key={path} exact path={path} component={Component} />
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} exact path={path} component={Component} />
                )}
            </Switch>
        </>
    );
}

export default AppRouter;
