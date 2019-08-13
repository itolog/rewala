import { combineReducers } from 'redux';

import { ActionType, StateType } from 'typesafe-actions';

import {
    Actions as getMe,
    ActionTypes as getMeActionTypes,
    epic as getMeEpic,
    reducer as getMeReducer,
} from './nested-states/get-me';

import {
    Actions as updateMe,
    ActionTypes as updateMeActionTypes,
    epic as updateMeEpic,
    reducer as updateMeReducer,
} from './nested-states/update-me';

export const Actions = {
    getMe,
    updateMe,
};

export const ActionTypes = {
    getMeActionTypes,
    updateMeActionTypes,
};

export const reducer = combineReducers({
    getMe: getMeReducer,
    updateMe: updateMeReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
    getMeEpic,
    updateMeEpic,
];

export type State = StateType<typeof reducer>;
