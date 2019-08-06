// import { createSelector } from 'reselect';

import {AppState} from '../index';

export const getPasswordState = (state: AppState) => state.password.changePassword;

export const getResetPasswordState = (state: AppState) => state.password.resetPassword;
