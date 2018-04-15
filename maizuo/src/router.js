import React from 'react';
import {Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Detail from './routes/Detail';
import Navbar from './components/Navbar/Navbar.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <div className="app">
            <Navbar></Navbar>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={IndexPage} />
                <Route path="/detail" component={Detail} />
            </Switch>
        </div>
    </Router>
  );
}

export default RouterConfig;
