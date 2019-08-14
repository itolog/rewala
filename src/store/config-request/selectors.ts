import {createSelector} from 'reselect';
import { AppState } from '../index';

export const getConfigState = (state: AppState) => state.config.getConfig;

// export const getConfigErrors = (state: AppState) => state && state.config && state.config.getConfig.data &&
//   state.config.getConfig.data.result && state.config.getConfig.data.result;

export const getConfigErrors = createSelector(
  getConfigState,
  (state) => state.data ? state.data.result : null,
);

export const getConfigData = createSelector(
  getConfigState,
  (state) => state.data,
);
