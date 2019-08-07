import {AppState} from '../index';

export const getPasswordState = (state: AppState) => state.password.changePassword;

export const getResetPasswordState = (state: AppState) => state.password.resetPassword;

export const getResetPasswordConfirmState =(state: AppState) => state.password.resetPasswordConfirmCode;
