import { createSelector } from 'reselect';
import { AppState } from '../index';

export const profileRequestState = (state: AppState) => state.profileRequest;

export const profileRequestGetMe = createSelector(
  profileRequestState,
  (state) => state.getMe,
);
