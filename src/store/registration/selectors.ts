import { AppState } from '../index';

export const getRegistrationFetchErrors = (state: AppState) => state
  && state.registration
  && state.registration.registration
  && state.registration.registration.data
