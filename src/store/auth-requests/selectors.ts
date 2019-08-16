import { createSelector } from 'reselect';
import { AppState } from '../index';

export const loginRequestState = (state: AppState) => state.authRequest.loginRequest;
export const registrationRequestState = (state: AppState) => state.authRequest.registrationRequest;
export const  configRequestState = (state: AppState) => state.authRequest.getConfig;

export const loginRequestData = createSelector(
  loginRequestState,
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
export const getConfigErrors = createSelector(
  configRequestState,
  (state) => state.data ? state.data.result : null,
);

export const getConfigData = createSelector(
  configRequestState,
  (state) => state.data,
);
