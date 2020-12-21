import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Switch, Route } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <h1>Home</h1>
                {/* <Home /> */}
            </Route>
            {/* <PrivateRoute path="/blog/:id">
                <BlogPost />
            </PrivateRoute> */}
            <Route path="/blog">
                <h1>Blog</h1>
                {/* <Blog /> */}
            </Route>
            <Route path="/login">
                <h1>Login</h1>
                {/* <Login /> */}
            </Route>
        </Switch>
    )
}

export default Routes
