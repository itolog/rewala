import { Epic, StateObservable } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { EMPTY, Observable } from 'rxjs';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
// TYPES
import { ChangePasswordInput, User } from '../../../shared/generated/graphql';
import PasswordService from '../service';
import { AppState } from '../../index';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<ChangePasswordInput, User, Error>('CHANGE_PASSWORD_CONFIRM_REQUEST');

const epic: Epic = (actions$: Observable<Action>, state$: StateObservable<AppState>) => effect(
  actions$,
  () => {
    const code = state$.value && state$.value.verifyCode && state$.value.verifyCode.code;
    const password= state$.value.form.changePasswordConfirmForm.values && state$.value.form.changePasswordConfirmForm.values.confirmPassword;
    if (code) {
      return PasswordService.changePasswordConfirm({
        "resetPasswordCode": code.toString(),
        "password": password
      });
    }
    return  EMPTY
  }
);

export { epic, reducer, Actions, ActionTypes };
