import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NoMatch from '../../../shared/components/NoMatch/NoMatch';
import ChangePasswordConfirm from './ChangePasswordConfirm/ChangePasswordConfirm';
import Registration from './Registration/Registration';
import ResetPassword from './ResetPassword/ResetPassword';
import ResetPasswordConfirm from './ResetPasswordConfirm/ResetPasswordConfirm';

import Auth from './Auth/Auth';

export default function AuthRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={Auth}/>
        <Route path='/reset-password/' component={ResetPassword}/>
        <Route path='/reset-password-confirm/' component={ResetPasswordConfirm}/>
        <Route path='/change-password-confirm/' component={ChangePasswordConfirm}/>
        <Route path='/registration/' component={Registration}/>

        <Route component={NoMatch}/>
      </Switch>
    </Router>
  );
}
