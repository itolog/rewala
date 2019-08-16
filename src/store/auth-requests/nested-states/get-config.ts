import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';
import { Config } from '../../../shared/generated/graphql';

import { Observable } from 'rxjs';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import AuthService from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<string, Config, Error>('GET_CONFIG_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  () => AuthService.getConfig(),
);

export { epic, reducer, Actions, ActionTypes };
