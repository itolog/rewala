import { Epic, ofType, StateObservable } from 'redux-observable';
import { EMPTY, Observable, of } from 'rxjs';

import { ActionTypeUnion, ActionTypes, Actions } from './actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import AuthService from './service';
import AuthTokenService from '../../shared/services/authToken.service';
import { AppState } from '../index';

export const logInEpic: Epic = (action$: Observable<ActionTypeUnion>) => action$.pipe(
  ofType(ActionTypes.LOGIN),
  switchMap(({ payload }: any) => {
    return AuthService.logIn(payload).pipe(
      map(({ data }: any) => {
        AuthTokenService.setAuthToken(data.login.authToken);
        return Actions.logInSuccess(data.login.authToken);

      }),
      catchError((errors) => {
        console.log(errors);
        return of(Actions.logInFailed('Wrong email or password'))
      })
    );
  })
);

export const logOutEpic: Epic = (action$: Observable<ActionTypeUnion>, state$: StateObservable<AppState>) => action$.pipe(
  ofType(ActionTypes.LOG_OUT),
  switchMap(() => {
    const token = state$.value.auth.token;
    return AuthService.logOut({
      "FCMToken": token
    }).pipe(
      map(() => {
        AuthTokenService.removeAuthToken();
        return Actions.logOutSuccess()
      })
    );
  })
);
