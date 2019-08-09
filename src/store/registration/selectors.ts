import { AppState } from '../index';

export const getRegistrationState = (state: AppState) => state.registration.registration;

export const registrationFetchErrors = (state: AppState) => state
  && state.registration
  && state.registration.registration
  && state.registration.registration.data;
