import { Epic, ofType, StateObservable } from 'redux-observable';
import { Observable, of } from 'rxjs';

import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, ActionTypes, ActionTypeUnion } from './actions';

import AuthTokenService from '../../shared/services/authToken.service';
import { AppState } from '../index';
import AuthService from './service';

export const logInEpic: Epic = (action$: Observable<ActionTypeUnion>) => action$.pipe(
  ofType(ActionTypes.LOGIN),
  switchMap(({ payload }: any) => {
    return AuthService.logIn(payload).pipe(
      map(({ data }: any) => {
        AuthTokenService.setAuthToken(data.login.authToken);
        return Actions.logInSuccess(data.login.authToken);
      }),
      catchError(() => {
        return of(Actions.logInFailed('Wrong email or password'));
      }),
    );
  }),
);

export const logOutEpic: Epic = (action$: Observable<ActionTypeUnion>, state$: StateObservable<AppState>) => action$.pipe(
  ofType(ActionTypes.LOG_OUT),
  switchMap(() => {
    const token = state$.value.auth.token;
    return AuthService.logOut({
      FCMToken: token,
    }).pipe(
      map(() => {
        AuthTokenService.removeAuthToken();
        return Actions.logOutSuccess();
      }),
      catchError((error) => of(Actions.logOutFailed(error.message))),
    );
  }),
);
