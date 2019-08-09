import {AppState} from '../index';

export const getProfileState = (state: AppState) => state.profile;

export const getMe = (state: AppState) => state.profile.getMe;

export const getMeError = (state: AppState) => state.profile.getMe.data;
