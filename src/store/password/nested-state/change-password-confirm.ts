import { Epic, StateObservable } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { EMPTY, Observable } from 'rxjs';

// TYPES
import { ChangePasswordInput } from '../../../shared/generated/graphql';
import { AppState } from '../../index';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
import PasswordService from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<ChangePasswordInput, any, Error>('CHANGE_PASSWORD_CONFIRM_REQUEST');

const epic: Epic = (actions$: Observable<Action>, state$: StateObservable<AppState>) => effect(
  actions$,
  () => {
    const code = state$.value && state$.value.verifyCode && state$.value.verifyCode.code;
    const password = state$.value.form.changePasswordConfirmForm.values && state$.value.form.changePasswordConfirmForm.values.confirmPassword;
    if (code) {
      return PasswordService.changePasswordConfirm({
        resetPasswordCode: code.toString(),
        password,
      });
    }
    return EMPTY;
  },
);

export { epic, reducer, Actions, ActionTypes };
