import { action, ActionType } from 'typesafe-actions';
import { Me } from '../../shared/types/profile';

export enum ActionTypes {
  GET_ME = 'GET_ME',
  GET_ME_SUCCEDED = 'GET_ME_SUCCEDED',
  GET_ME_FAILED = 'GET_ME_FAILED',
}

export const Actions = {
  getMe: () => action(ActionTypes.GET_ME),
  getMeSuccess: (payload: Me) => action(ActionTypes.GET_ME_SUCCEDED, payload),
  getMeFailed: (payload: any) => action(ActionTypes.GET_ME_FAILED, payload),
};

export type ActionTypeUnion = ActionType<typeof Actions>;
