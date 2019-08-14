import {createSelector} from 'reselect';
import { AppState } from '../index';

export const getConfigState = (state: AppState) => state.config.getConfig;

export const getConfigErrors = createSelector(
  getConfigState,
  (state) => state.data ? state.data.result : null,
);

export const getConfigData = createSelector(
  getConfigState,
  (state) => state.data,
);
