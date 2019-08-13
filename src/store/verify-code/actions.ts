import { action, ActionType } from 'typesafe-actions';

export enum ActionTypes {
  VERIFY_CODE_REQUEST = 'VERIFY_CODE_REQUEST',
  VERIFY_CODE_REQUEST_SUCCEDED = 'VERIFY_CODE_REQUEST_SUCCEDED',

  VERIFY_CODE_REMOVE = 'VERIFY_CODE_REMOVE',
}

export const Actions = {
  requestVerifyCode: (payload: string) => action(ActionTypes.VERIFY_CODE_REQUEST, payload),
  requestVerifySuccesse: (payload: string) => action(ActionTypes.VERIFY_CODE_REQUEST_SUCCEDED, payload),
};

export type ActionTypeUnion = ActionType<typeof Actions>;
