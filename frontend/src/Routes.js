import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Users from './components/Users';
import Home from './components/Home';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/register">
                <RegisterForm />
            </Route>

            <Route exact path="/admin">
                <Users />
            </Route>
        </Switch>
    )
}
export default Routes;