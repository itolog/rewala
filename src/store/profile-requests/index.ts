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

import {
    Actions as registration,
    ActionTypes as registrationActionTypes,
    epic as registrationMeEpic,
    reducer as registrationReducer,
} from './nested-states/registration';

export const Actions = {
    getMe,
    updateMe,
    registration,
};

export const ActionTypes = {
    getMeActionTypes,
    updateMeActionTypes,
    registrationActionTypes,
};

export const reducer = combineReducers({
    getMe: getMeReducer,
    updateMe: updateMeReducer,
    registration: registrationReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
    getMeEpic,
    updateMeEpic,
    registrationMeEpic,
];

export type State = StateType<typeof reducer>;
