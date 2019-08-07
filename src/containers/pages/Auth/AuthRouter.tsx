import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ResetPasswordConfirm from './ResetPasswordConfirm/ResetPasswordConfirm';
import ResetPassword from './ResetPassword/ResetPassword';
import NoMatch from '../Main/NoMatch/NoMatch';

import Auth from './Auth';


export default function AuthRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/reset-password/" component={ResetPassword} />
        <Route path="/reset-password-confirm/" component={ResetPasswordConfirm} />

        <Route component={NoMatch}/>
      </Switch>
    </Router>
  );
}
