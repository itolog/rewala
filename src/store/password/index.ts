import { combineReducers } from 'redux';

import { ActionType, StateType } from 'typesafe-actions';

import {
  Actions as changePasswordAction,
  ActionTypes as changePasswordActionTypes,
  reducer as changePasswordReducer,
  epic as changePasswordEpic
} from './nested-state/change-password';

import {
  Actions as resetPasswordAction,
  ActionTypes as resetPasswordActionTypes,
  reducer as resetPasswordReducer,
  epic as resetPasswordEpic
} from './nested-state/reset-password';

export const Actions = {
  changePasswordAction,
  resetPasswordAction
};

export const ActionTypes = {
  changePasswordActionTypes,
  resetPasswordActionTypes
};

export const reducer = combineReducers({
  changePassword: changePasswordReducer,
  resetPassword: resetPasswordReducer
});
export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  changePasswordEpic,
  resetPasswordEpic
];

export type State = StateType<typeof reducer>;
