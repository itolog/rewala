import { createSelector } from 'reselect';
import { AppState } from '../index';

export const getProfileState = (state: AppState) => state.profile;

export const getMe = createSelector(
  getProfileState,
  (state) => state.data,
);

export const getMeError = createSelector(
  getProfileState,
  (state) => state.errors,
);

// export const getUpdateMeState = (state: AppState) => state.profile.updateMe;
// export const getUpdateMeData = (state: AppState) => state.profile.updateMe.data;
