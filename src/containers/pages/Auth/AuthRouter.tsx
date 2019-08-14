import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from '../../../shared/components/Loader/Loader';

const Auth = React.lazy(() => import('./Auth/Auth'));
const Registration = React.lazy(() => import('./Registration/Registration'));
const ResetPasswordConfirm = React.lazy(() => import('./ResetPasswordConfirm/ResetPasswordConfirm'));
const ResetPassword = React.lazy(() => import('./ResetPassword/ResetPassword'));
const ChangePasswordConfirm = React.lazy(() => import('./ChangePasswordConfirm/ChangePasswordConfirm'));
const NoMatch = React.lazy(() => import('../../../shared/components/NoMatch/NoMatch'));

export default function AuthRouter() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route path='/' exact={true} component={Auth}/>
          <Route path='/reset-password/' component={ResetPassword}/>
          <Route path='/reset-password-confirm/' component={ResetPasswordConfirm}/>
          <Route path='/change-password-confirm/' component={ChangePasswordConfirm}/>
          <Route path='/registration/' component={Registration}/>

          <Route component={NoMatch}/>
        </Switch>
      </Suspense>
    </Router>
  );
}
