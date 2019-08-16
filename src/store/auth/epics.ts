import { Epic, ofType, StateObservable } from 'redux-observable';
import { EMPTY, Observable, of } from 'rxjs';

import { map, switchMap } from 'rxjs/operators';
import AuthTokenService from '../../shared/services/authToken.service';
import { Actions as AuthRequestActions, ActionTypes as AuthRequestActionTypes } from '../auth-requests';
import { AppState, RootActions } from '../index';
import { transferActionEpicFactory } from '../utils/transfer-action';
import { Actions, ActionTypes } from './actions';

const logInEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.LOGIN),
  switchMap(({ payload }) => of(AuthRequestActions.loginRequest.action(payload)),
  ),
);

const loginSucceededEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(AuthRequestActionTypes.loginRequestActionTypes.ACTION_SUCCEEDED),
  switchMap(({ payload: { data: { login } } }) => {
    if (login && login.hasOwnProperty('authToken')) {
      AuthTokenService.setAuthToken(login.authToken);
      return of(Actions.logInSuccess(login.authToken));
    }
    return EMPTY;
  }),
);

const loginFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.loginRequestActionTypes.ACTION_FAILED,
  Actions.logInFailed,
);

const logOutEpic: Epic = (action$: Observable<RootActions>, state$: StateObservable<AppState>) => action$.pipe(
  ofType(ActionTypes.LOG_OUT),
  switchMap(() => {
    const token = state$.value.auth.token;
    return of(AuthRequestActions.logoutRequest.action({
      FCMToken: token,
    }));
  }),
);

const logOutSucceededEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(AuthRequestActionTypes.logoutRequestActionTypes.ACTION_SUCCEEDED),
  switchMap(() => {
    AuthTokenService.removeAuthToken();
    return of(Actions.logOutSuccess());
  }),
);

const logOutFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.logoutRequestActionTypes.ACTION_FAILED,
  Actions.logOutFailed,
);

// REGISTRATION
const registrationEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.REGISTRATION),
  switchMap(({ payload }) => of(AuthRequestActions.registration.action(payload)),
  ),
);

const registrationSucceededEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.registrationActionTypes.ACTION_SUCCEEDED,
  Actions.registrationSuccess,
);

const registrationFailedEpic: Epic = transferActionEpicFactory(
  AuthRequestActionTypes.registrationActionTypes.ACTION_FAILED,
  Actions.registrationFailed,
);

const getConfigEpic: Epic = (action$: Observable<RootActions>) => action$.pipe(
  ofType(ActionTypes.GET_CONFIG),
  map(() => AuthRequestActions.getConfig.action(),
  ),
);

export const epics = [
  logInEpic,
  loginSucceededEpic,
  loginFailedEpic,

  logOutEpic,
  logOutSucceededEpic,
  logOutFailedEpic,

  registrationEpic,
  registrationSucceededEpic,
  registrationFailedEpic,

  getConfigEpic,
];
