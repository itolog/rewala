import { action, ActionType } from 'typesafe-actions';

import { LoginInput, UserInput } from '../../shared/generated/graphql';

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCEDED = 'LOGIN_SUCCEDED',
  LOGIN_FAILED = 'LOGIN_FAILED',

  LOG_OUT = 'LOG_OUT',
  LOG_OUT_SUCCEDED = 'LOG_OUT_SUCCEDED',
  LOG_OUT_FAILED = 'LOG_OUT_FAILED',

  REGISTRATION = 'REGISTRATION',
  REGISTRATION_SUCCEDED = 'REGISTRATION_SUCCEDED',
  REGISTRATION_FAILED = 'REGISTRATION_FAILED',

  GET_CONFIG = 'GET_CONFIG',
}

export const Actions = {
  logIn: (payload: LoginInput) => action(ActionTypes.LOGIN, payload),
  logInSuccess: (data: any) => action(ActionTypes.LOGIN_SUCCEDED, data),
  logInFailed: (paylod: any) => action(ActionTypes.LOGIN_FAILED, paylod),

  logOut: () => action(ActionTypes.LOG_OUT),
  logOutSuccess: () => action(ActionTypes.LOG_OUT_SUCCEDED),
  logOutFailed: (payload: any) => action(ActionTypes.LOG_OUT_FAILED, payload),

  registration: (payload: UserInput) => action(ActionTypes.REGISTRATION, payload),
  registrationSuccess: (payload: UserInput) => action(ActionTypes.REGISTRATION_SUCCEDED, payload),
  registrationFailed: (payload: any) => action(ActionTypes.REGISTRATION_FAILED, payload),

  getConfig: () => action(ActionTypes.GET_CONFIG),
};

export type ActionTypeUnion = ActionType<typeof Actions>;
