import { combineReducers } from 'redux';

import { ActionType, StateType } from 'typesafe-actions';

import {
  Actions as changePasswordAction,
  ActionTypes as changePasswordActionTypes,
  reducer as changePasswordReducer,
  epic as changePasswordEpic
} from './nested-state/change-password';

export const Actions = {
  changePasswordAction
};

export const ActionTypes = {
  changePasswordActionTypes
};

export const reducer = combineReducers({
  changePassword: changePasswordReducer
});
export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  changePasswordEpic
];

export type State = StateType<typeof reducer>;
