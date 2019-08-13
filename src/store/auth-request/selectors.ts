import { createSelector } from 'reselect';
import { AppState } from '../index';

export const loginRequestState = (state: AppState) => state.authRequest.loginRequest;

export const loginRequestData = createSelector(
  loginRequestState,
  (state) => state.data,
);
