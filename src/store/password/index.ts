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

import {
  Actions as resetPasswordConfirmCodeAction,
  ActionTypes as resetPasswordConfirmCodeActionTypes,
  reducer as resetPasswordConfirmCodeReducer,
  epic as resetPasswordConfirmCodeEpic
} from './nested-state/reset-password-confirm-code';

export const Actions = {
  changePasswordAction,
  resetPasswordAction,
  resetPasswordConfirmCodeAction
};

export const ActionTypes = {
  changePasswordActionTypes,
  resetPasswordActionTypes,
  resetPasswordConfirmCodeActionTypes
};

export const reducer = combineReducers({
  changePassword: changePasswordReducer,
  resetPassword: resetPasswordReducer,
  resetPasswordConfirmCode: resetPasswordConfirmCodeReducer
});
export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  changePasswordEpic,
  resetPasswordEpic,
  resetPasswordConfirmCodeEpic
];

export type State = StateType<typeof reducer>;
