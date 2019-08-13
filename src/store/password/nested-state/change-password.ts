import { Epic, StateObservable } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { Observable } from 'rxjs';

import { ChangePasswordInput, User } from '../../../shared/generated/graphql';
import { AppState } from '../../index';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
import PasswordService from '../service';

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
      oldPassword: value!.oldPassword,
      newPassword: value!.confirmPassword,
    });
  },
);

export { epic, reducer, Actions, ActionTypes };
