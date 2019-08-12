import {AppState} from '../index';

export const getProfileState = (state: AppState) => state.profile.getMe;

export const getMe = (state: AppState) => state.profile.getMe;

export const getMeError = (state: AppState) => state.profile.getMe.data;

export const getUpdateMeState = (state: AppState) => state.profile.updateMe;
export const getUpdateMeData = (state: AppState) => state.profile.updateMe.data;
