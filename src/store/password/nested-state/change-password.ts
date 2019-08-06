import { Epic, StateObservable } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { EMPTY, Observable } from 'rxjs';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
// TYPES
import { ChangePasswordInput, User } from '../../../shared/generated/graphql';
import PasswordService from '../service';
import AuthTokenService from '../../../shared/services/authToken.service';
import { AppState } from '../../index';
import { tap, map } from 'rxjs/operators';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<ChangePasswordInput, User, Error>('CHANGE_PASSWORD_REQUEST');

const epic: Epic = (actions$: Observable<Action>, state$: StateObservable<AppState>) => effect(
  actions$,
  () => {
    const value = state$.value.form.changePasswordForm.values;
    return PasswordService.changePassword({
      "oldPassword": value!.oldPassword,
      "newPassword": value!.confirmPassword
    }).pipe(
      tap((val) => console.log(val))
    )
  }
);

export { epic, reducer, Actions, ActionTypes };
