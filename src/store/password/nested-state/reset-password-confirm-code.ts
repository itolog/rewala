import { Epic, StateObservable } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { Observable } from 'rxjs';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import { AppState } from '../../index';
import PasswordService from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<string, boolean, Error>('RESET_PASSWORD_CONFIRM_REQUEST');

const epic: Epic = (actions$: Observable<Action>, state$: StateObservable<AppState>) => effect(
  actions$,
  () => {
    const value = state$.value.form.resetPasswordConfirmCodeForm
      && state$.value.form.resetPasswordConfirmCodeForm.values
      && state$.value.form.resetPasswordConfirmCodeForm.values
      && state$.value.form.resetPasswordConfirmCodeForm.values.confirmPasswordCode;
    return PasswordService.resetPasswordConfirmForm(value);
  },
);

export { epic, reducer, Actions, ActionTypes };
