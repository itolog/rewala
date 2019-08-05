// import {createSelector} from 'reselect';

import {AppState} from '../index';

export const getAuthState = (state: AppState) => state.auth;
