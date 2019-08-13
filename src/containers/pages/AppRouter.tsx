import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';

import { Route, RouteComponentProps, withRouter } from 'react-router-dom';

import AuthTokenService from '../../shared/services/authToken.service';
import { AppState } from '../../store';
import { Actions } from '../../store/auth/actions';
import { getAuthState } from '../../store/auth/selectors';

import { Dispatch } from 'redux';

import Loader from '../../shared/components/Loader/Loader';

const MainRouter = React.lazy(() => import('./Main/MainRouter'));
const AuthRouter = React.lazy(() => import('./Auth/AuthRouter'));

const mapStateToProps = (state: AppState) => {
  return {
    getAuth: getAuthState(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logInSuccess: (payload: string) => dispatch(Actions.logInSuccess(payload)),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  & RouteComponentProps
  ;

function AppRouter(props: Props) {
  const { getAuth, logInSuccess } = props;
  useEffect(() => {
    const auth = AuthTokenService.getAuthToken().subscribe(
      (val) => {
        if (val) {
          logInSuccess(val);
        }
      },
    );
    return () => {
      auth.unsubscribe();
    };
  }, [ logInSuccess ]);

  return (
    <Suspense fallback={<Loader/>}>
      <Route
        render={() => (
          getAuth.isAuth ? (
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
