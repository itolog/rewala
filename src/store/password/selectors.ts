import { AppState } from '../index';

export const getPasswordState = (state: AppState) => state.password.changePassword;
export const changePasswordError = (state: AppState) => state.password.changePassword.data;

export const getResetPasswordState = (state: AppState) => state.password.resetPassword;
export const resetPasswordErrors = (state: AppState) => state.password.resetPassword.data;

export const getResetPasswordConfirmState = (state: AppState) => state.password.resetPasswordConfirmCode;
export const resetPasswordConfirmCodeErrors = (state: AppState) => state.password.resetPasswordConfirmCode.data;

export const getChangeConfirmPasswordState = (state: AppState) => state.password.changePasswordConfirm;
export const changeConfirmPassworErrors = (state: AppState) => state.password.changePasswordConfirm;
