import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ResetPasswordConfirm from './ResetPasswordConfirm/ResetPasswordConfirm';
import ResetPassword from './ResetPassword/ResetPassword';
import ChangePasswordConfirm from './ChangePasswordConfirm/ChangePasswordConfirm';
import NoMatch from '../../../shared/components/NoMatch/NoMatch';

import Auth from './Auth';


export default function AuthRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Auth}/>
        <Route path="/reset-password/" component={ResetPassword}/>
        <Route path="/reset-password-confirm/" component={ResetPasswordConfirm}/>
        <Route path="/change-password-confirm/" component={ChangePasswordConfirm}/>

        <Route component={NoMatch}/>
      </Switch>
    </Router>
  );
}
