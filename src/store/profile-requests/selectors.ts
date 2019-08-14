import { createSelector } from 'reselect';
import { AppState } from '../index';

export const profileRequestState = (state: AppState) => state.profileRequest;
export const getRegistrationState = (state: AppState) => state.profileRequest.registration;

export const profileRequestGetMe = createSelector(
  profileRequestState,
  (state) => state.getMe,
);

export const registrationFetchErrors = createSelector(
  getRegistrationState,
  (state) => state.data,
);
