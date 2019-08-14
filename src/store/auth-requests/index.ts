import { combineReducers } from 'redux';

import { ActionType, StateType } from 'typesafe-actions';

import {
  Actions as loginRequest,
  ActionTypes as loginRequestActionTypes,
  epic as loginRequestEpic,
  reducer as loginRequestReducer,
} from './nested-states/log-in';

import {
  Actions as logoutRequest,
  ActionTypes as logoutRequestActionTypes,
  epic as logoutRequestEpic,
  reducer as logoutRequestReducer,
} from './nested-states/log-out';

export const Actions = {
  loginRequest,
  logoutRequest,
};

export const ActionTypes = {
  loginRequestActionTypes,
  logoutRequestActionTypes,
};

export const reducer = combineReducers({
  loginRequest: loginRequestReducer,
  logoutRequest: logoutRequestReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  loginRequestEpic,
  logoutRequestEpic,
];

export type State = StateType<typeof reducer>;
