import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { Observable } from 'rxjs';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import { User, UserInput } from '../../../shared/generated/graphql';
import Registration from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<UserInput, User, Error>('REGISTRATION_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  (payload) => {
    return Registration.registration(payload);
  },
);

export { epic, reducer, Actions, ActionTypes };
