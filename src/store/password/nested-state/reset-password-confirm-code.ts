import { Epic, StateObservable } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { EMPTY, Observable } from 'rxjs';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import PasswordService from '../service';
import { AppState } from '../../index';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<string, boolean, Error>('RESET_PASSWORD_REQUEST');

const epic: Epic = (actions$: Observable<Action>, state$: StateObservable<AppState>) => effect(
  actions$,
  () => {
    const value = state$.value.form.resetPasswordConfirmCodeForm && state$.value.form.resetPasswordConfirmCodeForm.values && state$.value.form.resetPasswordConfirmCodeForm.values;
    console.log(value)
    // return PasswordService.resetPasswordConfirmForm()

    return EMPTY;
  }
);

export { epic, reducer, Actions, ActionTypes };
