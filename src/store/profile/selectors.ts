import { createSelector } from 'reselect';

import { AppState } from '../index';

export const getProfileState = (state: AppState) => state.profile;

export const getMe  = createSelector(
    getProfileState,
    (state) => state.me
);