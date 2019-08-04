import { combineReducers } from 'redux';

import { ActionType, StateType } from 'typesafe-actions';

import {
    Actions as getMe,
    ActionTypes as getMeActionTypes,
    epic as getMeEpic,
    reducer as getMeReducer,
} from './nested-states/get-me';

export const Actions = {
    getMe,
};

export const ActionTypes = {
    getMeActionTypes,
};

export const reducer = combineReducers({
    getMe: getMeReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
    getMeEpic
];


export type State = StateType<typeof reducer>;
