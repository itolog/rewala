import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from '../../../shared/components/Header/Header';

import ResetPasswordConfirm from '../Auth/ResetPasswordConfirm/ResetPasswordConfirm';

import Search from './Search/Search';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import NoMatch from './NoMatch/NoMatch';

export default function MainRouter() {
  return (
    <Router>
        <Header />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search/"  component={Search} />
        <Route path="/profile/"  component={Profile} />

        <Route path="/reset/" component={ResetPasswordConfirm} />

            <Route component={NoMatch}/>
        </Switch>
    </Router>
  );
}
