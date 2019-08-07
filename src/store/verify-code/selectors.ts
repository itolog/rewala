import { AppState } from '../index';

export const getVerifyCode = (state: AppState) => state.verifyCode.code;
