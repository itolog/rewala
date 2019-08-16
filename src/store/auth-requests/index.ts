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

import {
  Actions as registration,
  ActionTypes as registrationActionTypes,
  epic as registrationMeEpic,
  reducer as registrationReducer,
} from './nested-states/registration';

import {
  Actions as getConfig,
  ActionTypes as configRequestActionTypes,
  epic as configRequestEpic,
  reducer as configRequestReducer,
} from './nested-states/get-config';

export const Actions = {
  loginRequest,
  logoutRequest,
  registration,
  getConfig,
};

export const ActionTypes = {
  loginRequestActionTypes,
  logoutRequestActionTypes,
  registrationActionTypes,
  configRequestActionTypes,
};

export const reducer = combineReducers({
  loginRequest: loginRequestReducer,
  logoutRequest: logoutRequestReducer,
  registrationRequest: registrationReducer,
  getConfig: configRequestReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  loginRequestEpic,
  logoutRequestEpic,
  registrationMeEpic,
  configRequestEpic,
];

export type State = StateType<typeof reducer>;
