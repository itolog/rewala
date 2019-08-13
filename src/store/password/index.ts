import { combineReducers } from 'redux';

import { ActionType, StateType } from 'typesafe-actions';

import {
  Actions as changePasswordAction,
  ActionTypes as changePasswordActionTypes,
  epic as changePasswordEpic,
  reducer as changePasswordReducer,
} from './nested-state/change-password';

import {
  Actions as resetPasswordAction,
  ActionTypes as resetPasswordActionTypes,
  epic as resetPasswordEpic,
  reducer as resetPasswordReducer,
} from './nested-state/reset-password';

import {
  Actions as resetPasswordConfirmCodeAction,
  ActionTypes as resetPasswordConfirmCodeActionTypes,
  epic as resetPasswordConfirmCodeEpic,
  reducer as resetPasswordConfirmCodeReducer,
} from './nested-state/reset-password-confirm-code';

import {
  Actions as changePasswordConfirmAction,
  ActionTypes as changePasswordConfirmActionTypes,
  epic as changePasswordConfirmEpic,
  reducer as changePasswordConfirmReducer,
} from './nested-state/change-password-confirm';

export const Actions = {
  changePasswordAction,
  resetPasswordAction,
  resetPasswordConfirmCodeAction,
  changePasswordConfirmAction,
};

export const ActionTypes = {
  changePasswordActionTypes,
  resetPasswordActionTypes,
  resetPasswordConfirmCodeActionTypes,
  changePasswordConfirmActionTypes,
};

export const reducer = combineReducers({
  changePassword: changePasswordReducer,
  resetPassword: resetPasswordReducer,
  resetPasswordConfirmCode: resetPasswordConfirmCodeReducer,
  changePasswordConfirm: changePasswordConfirmReducer,
});
export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  changePasswordEpic,
  resetPasswordEpic,
  resetPasswordConfirmCodeEpic,
  changePasswordConfirmEpic,
];

export type State = StateType<typeof reducer>;
