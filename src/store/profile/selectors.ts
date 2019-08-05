import {createSelector} from 'reselect';

import {AppState} from '../index';

export const getProfileState = (state: AppState) => state.profile;

export const getMe = createSelector(
    getProfileState,
    (state) => state.getMe
);

export const getMeError = createSelector(
    getProfileState,
    (state) => {
        if (state.getMe && state.getMe.data && state.getMe.data.result && state.getMe.data.result.errors) {
            return state.getMe.data.result
        }
    }
);