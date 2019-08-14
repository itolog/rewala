import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { Observable } from 'rxjs';
import { LogOutInput } from '../../../shared/generated/graphql';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import AuthService from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<LogOutInput, boolean, Error>('LOGOUT_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  (payload) => {
    return AuthService.logOut(payload);
  },
);

export { epic, reducer, Actions, ActionTypes };
