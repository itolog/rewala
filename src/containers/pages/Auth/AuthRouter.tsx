import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import ResetPasswordConfirm from './ResetPasswordConfirm/ResetPasswordConfirm';
import ResetPassword from './ResetPassword/ResetPassword';
import ChangePasswordConfirm from './ChangePasswordConfirm/ChangePasswordConfirm';
import Registration from './Registration/Registration';
import NoMatch from '../../../shared/components/NoMatch/NoMatch';

import Auth from './Auth';

export default function AuthRouter() {
  return (
    <Router>
      <Route
        render={({ location }: RouteComponentProps) => (
          <TransitionGroup component={null}>
            <CSSTransition
              key={location.key}
              classNames="slide"
              in={true}
              appear={true}
              timeout={300}
            >

              <Switch location={location}>
                <Route path="/" exact component={Auth}/>
                <Route path="/reset-password/" component={ResetPassword}/>
                <Route path="/reset-password-confirm/" component={ResetPasswordConfirm}/>
                <Route path="/change-password-confirm/" component={ChangePasswordConfirm}/>
                <Route path="/registration/" component={Registration}/>

                <Route component={NoMatch}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}
