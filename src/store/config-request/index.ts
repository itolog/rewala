import { combineReducers } from 'redux';

import { ActionType, StateType } from 'typesafe-actions';

import {
  Actions as getConfig,
  ActionTypes as getConfigActionTypes,
  epic as getConfigEpic,
  reducer as getConfigReducer,
} from './get-config';

export const Actions = {
  getConfig,
};

export const ActionTypes = {
  getConfigActionTypes,
};

export const reducer = combineReducers({
  getConfig: getConfigReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  getConfigEpic,
];

export type State = StateType<typeof reducer>;
