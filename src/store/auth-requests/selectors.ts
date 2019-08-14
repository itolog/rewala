import { createSelector } from 'reselect';
import { AppState } from '../index';

export const loginRequestState = (state: AppState) => state.authRequest.loginRequest;
export const logoutRequestState = (state: AppState) => state.authRequest.logoutRequest;
export const registrationRequestState = (state: AppState) => state.authRequest.registrationRequest;

export const loginRequestData = createSelector(
  loginRequestState,
  (state) => state.data,
);

export const logoutRequestData = createSelector(
  logoutRequestState,
  (state) => state.data,
);

export const registrationFetchErrors = createSelector(
  registrationRequestState,
  (state) => state.data,
);

export const registrationFetchData = createSelector(
  registrationRequestState,
  (state) => state.data ? state.data.data : null,
);
