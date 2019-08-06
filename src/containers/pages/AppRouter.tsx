import React, {useEffect, Suspense} from 'react';
import {connect} from 'react-redux';

import {Route, withRouter, RouteComponentProps, Redirect} from 'react-router-dom';

import AuthTokenService from '../../shared/services/authToken.service';
import {AppState} from '../../store';
import {getAuthState} from '../../store/auth/selectors';
import {Actions} from '../../store/auth/actions';

// import Auth from './Auth/Auth';

// import MainRouter from './Main/MainRouter';
import {Dispatch} from 'redux';
import Home from './Main/Home/Home';

const MainRouter = React.lazy(() => import('./Main/MainRouter'));
const Auth = React.lazy(() => import('./Auth/Auth'));

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
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppRouter));
