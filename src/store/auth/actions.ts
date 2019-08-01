import { action, ActionType } from 'typesafe-actions';

export enum ActionTypes {
    LOGIN = 'LOGIN',
    LOGIN_SUCCEDED = 'LOGIN_SUCCEDED',
    LOGIN_FAILED = 'LOGIN_FAILED',
}

export const Actions = {

};

export type ActionTypeUnion = ActionType<typeof Actions>;