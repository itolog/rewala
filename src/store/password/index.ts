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

import {
  Actions as changePasswordConfirmAction,
  ActionTypes as changePasswordConfirmActionTypes,
  reducer as changePasswordConfirmReducer,
  epic as changePasswordConfirmEpic
} from './nested-state/change-password-confirm';

export const Actions = {
  changePasswordAction,
  resetPasswordAction,
  resetPasswordConfirmCodeAction,
  changePasswordConfirmAction
};

export const ActionTypes = {
  changePasswordActionTypes,
  resetPasswordActionTypes,
  resetPasswordConfirmCodeActionTypes,
  changePasswordConfirmActionTypes
};

export const reducer = combineReducers({
  changePassword: changePasswordReducer,
  resetPassword: resetPasswordReducer,
  resetPasswordConfirmCode: resetPasswordConfirmCodeReducer,
  changePasswordConfirm: changePasswordConfirmReducer
});
export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  changePasswordEpic,
  resetPasswordEpic,
  resetPasswordConfirmCodeEpic,
  changePasswordConfirmEpic
];

export type State = StateType<typeof reducer>;
