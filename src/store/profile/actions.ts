import { action, ActionType } from 'typesafe-actions';
import { Me } from './types';

export enum ActionTypes {
    GET_ME = 'GET_ME',
    GET_ME_SUCCESS= 'GET_ME_SUCCESS'
}

export const Actions = {
    getMe: (payload: any) => action(ActionTypes.GET_ME , payload),
    getMeSuccess: (result: Me) => action(ActionTypes.GET_ME_SUCCESS, result)
};

export type ActionTypeUnion = ActionType<typeof Actions>;