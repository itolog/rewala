import { Epic, ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';

import { ActionTypeUnion, ActionTypes, Actions } from './actions';
import { switchMap, map, catchError } from 'rxjs/operators';

import AuthService from './service';
import AuthTokenService from '../../shared/services/authToken.service';

export const logInEpic: Epic = (action$: Observable<ActionTypeUnion>) => action$.pipe(
  ofType(ActionTypes.LOGIN),
  switchMap(({payload}) => {
    return AuthService.logIn(payload).pipe(
      map(({data}: any) => {
        AuthTokenService.setAuthToken(data.login.authToken);
        window.location.reload();
        return Actions.logInSuccess(data.login.authToken);

      }),
      catchError((errors) => {
        console.log(errors);
        return of(Actions.logInFailed('Wrong email or password'))
      })
    );
  })
);
