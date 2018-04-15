import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import Container from "./routes/Container";

function RouterConfig({ history }) {
    return (
        <Router history={history}>
              <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" exact component={Container} />
              </Switch>
        </Router>
    );
}

export default RouterConfig;
