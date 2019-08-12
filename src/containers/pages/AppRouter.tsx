import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';

import { Route, withRouter, RouteComponentProps } from 'react-router-dom';

import AuthTokenService from '../../shared/services/authToken.service';
import { AppState } from '../../store';
import { getAuthState } from '../../store/auth/selectors';
import { Actions } from '../../store/auth/actions';

import { Dispatch } from 'redux';

import Loader from '../../shared/components/Loader/Loader';
const MainRouter = React.lazy(() => import('./Main/MainRouter'));
const AuthRouter = React.lazy(() => import('./Auth/AuthRouter'));

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
  & RouteComponentProps
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
  }, [logInSuccess]);

  return (
    <Suspense fallback={<Loader />}>
      <Route
        render={() => (
          getAuthState.isAuth ? (
            <MainRouter/>
          ) : (
            <AuthRouter/>
          )
        )}
      />
    </Suspense>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppRouter));
