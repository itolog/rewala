import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { Observable } from 'rxjs';
import { asyncActionHandlerFactory } from '../utils/async-action-helper';

import ConfigService from './service';
import { Config } from '../../shared/generated/graphql';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<any, Config, Error>('GET_CONFIG_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  () => ConfigService.getConfig(),
);

export { epic, reducer, Actions, ActionTypes };
