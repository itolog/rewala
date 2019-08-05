import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import AuthTokenService from '../../shared/services/authToken.service';
import { AppState } from '../../store';
import { getAuthState } from '../../store/auth/selectors';
import { Actions } from '../../store/auth/actions';

import Auth from './Auth/Auth';
import MainRouter from './Main/MainRouter';
import { Dispatch } from 'redux';

const mapStateToProps = (state: AppState) => {
  return {
    getAuthState: getAuthState(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logInSuccess: (payload: string) => dispatch(Actions.logInSuccess(payload))
});


type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

function AppRouter(props: Props) {
  const { getAuthState, logInSuccess } = props;
  useEffect(() => {
    const auth = AuthTokenService.getAuthToken().subscribe(
      (val) => {
        if (val) {
          logInSuccess(val)
        }
      }
    );
    return () => {
      auth.unsubscribe()
    }
  }, []);

  return (
    <Router>
      <>
        <Route
          exact path='/' render={() => (
          !getAuthState.isAuth ? (
            <Auth/>
          ) : (
            <MainRouter/>
          )
        )}
        />
      </>
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
