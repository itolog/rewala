import { action, ActionType } from 'typesafe-actions';

import { LoginInput } from '../../shared/generated/graphql';

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCEDED = 'LOGIN_SUCCEDED',
  LOGIN_FAILED = 'LOGIN_FAILED',

  LOG_OUT = 'LOG_OUT',
  LOG_OUT__SUCCEDED = 'LOG_OUT_SUCCEDED',
  LOG_OUT__FAILED = 'LOG_OUT_FAILED',
}

export const Actions = {
  logIn: (payload: LoginInput) => action(ActionTypes.LOGIN, payload),
  logInSuccess: (token: string) => action(ActionTypes.LOGIN_SUCCEDED, token),
  logInFailed: (paylod: any) => action(ActionTypes.LOGIN_FAILED, paylod)
};

export type ActionTypeUnion = ActionType<typeof Actions>;
