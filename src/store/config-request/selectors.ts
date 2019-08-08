import { AppState } from '../index';

export const getConfigState = (state: AppState) => state.config.getConfig;

export const getConfigErrors = (state: AppState) => state && state.config && state.config.getConfig.data &&
  state.config.getConfig.data.result && state.config.getConfig.data.result;

