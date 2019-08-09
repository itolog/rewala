import { combineReducers } from 'redux';

import { ActionType, StateType } from 'typesafe-actions';

import {
  Actions as registration,
  ActionTypes as registrationActionTypes,
  epic as registrationEpic,
  reducer as registrationReducer,
} from './registration';

export const Actions = {
  registration,
};

export const ActionTypes = {
  registrationActionTypes,
};

export const reducer = combineReducers({
  registration: registrationReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  registrationEpic
];


export type State = StateType<typeof reducer>;
