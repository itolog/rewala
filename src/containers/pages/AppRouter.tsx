import React, {useEffect, Suspense} from 'react';
import {connect} from 'react-redux';

<<<<<<< HEAD
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
=======
import {Route, withRouter, RouteComponentProps, Redirect} from 'react-router-dom';
>>>>>>> origin/link

import AuthTokenService from '../../shared/services/authToken.service';
import {AppState} from '../../store';
import {getAuthState} from '../../store/auth/selectors';
import {Actions} from '../../store/auth/actions';

<<<<<<< HEAD
import { Dispatch } from 'redux';
=======
// import Auth from './Auth/Auth';

// import MainRouter from './Main/MainRouter';
import {Dispatch} from 'redux';
import Home from './Main/Home/Home';
>>>>>>> origin/link

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
<<<<<<< HEAD
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  & RouteComponentProps
  ;
=======
    & ReturnType<typeof mapStateToProps>
    & ReturnType<typeof mapDispatchToProps>
    & RouteComponentProps
    ;
>>>>>>> origin/link

function AppRouter(props: Props) {
    const {getAuthState, logInSuccess} = props;
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
<<<<<<< HEAD
      }
    );
    return () => {
      auth.unsubscribe()
    }
  }, []);

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
=======
    }, []);

    return (
        <Suspense fallback={<div className='loader'>Загрузка...</div>}>
            <Route
                path='/' render={() => (
                getAuthState.isAuth ? (
                    <MainRouter/>
                ) : (
                    <>
                        <Redirect to='/'/>
                        <Auth/>
                    </>
                )
            )}
            />
        </Suspense>
    );
>>>>>>> origin/link
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppRouter));
