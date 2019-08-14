import { action, ActionType } from 'typesafe-actions';
import { UserInput } from '../../shared/generated/graphql';
import { Me } from '../../shared/types/profile';

export enum ActionTypes {
  GET_ME = 'GET_ME',
  GET_ME_SUCCEDED = 'GET_ME_SUCCEDED',
  GET_ME_FAILED = 'GET_ME_FAILED',

  REGISTRATION = 'REGISTRATION',
  REGISTRATION_SUCCEDED = 'REGISTRATION_SUCCEDED',
  REGISTRATION_FAILED = 'REGISTRATION_FAILED',
}

export const Actions = {
  getMe: () => action(ActionTypes.GET_ME),
  getMeSuccess: (payload: Me) => action(ActionTypes.GET_ME_SUCCEDED, payload),
  getMeFailed: (payload: any) => action(ActionTypes.GET_ME_FAILED, payload),

  registration: (payload: UserInput) => action(ActionTypes.REGISTRATION, payload),
  registrationSuccess: (payload: UserInput) => action(ActionTypes.REGISTRATION_SUCCEDED, payload),
  registrationFailed: (payload: any) => action(ActionTypes.REGISTRATION_FAILED, payload),
};

export type ActionTypeUnion = ActionType<typeof Actions>;
