import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// IMPORT REDUCERS
import { reducer as formReducer } from 'redux-form';
import { ActionType, StateType } from 'typesafe-actions';
import { ActionTypeUnion as authActionTypes } from './auth/actions';
import { reducer as authReducer } from './auth/reducer';
import { reducer as profileReducer } from './profile/reducers';
import { reducer as verifyCodeReducer } from './verify-code/reducer';

import {
  ActionTypeUnion as ProfileRequestActionTypesUnion,
  epics as profileRequestEpic,
  reducer as profileRequestReducer,
} from './profile-requests';

import {
  ActionTypeUnion as PasswordActionTypesUnion,
  epics as passwordEpic,
  reducer as passwordReducer,
} from './password';

import {
  ActionTypeUnion as ConfigActionTypesUnion,
  epics as configEpic,
  reducer as configReducer,
} from './config-request';

// REFACTORING STORE
import {
  ActionTypeUnion as authRequestActionTypesUnion,
  epics as authRequestEpic,
  reducer as authRequestReducer,
} from './auth-requests';

// EPICS
import { epics as authEpics } from './auth/epics';
import { epics as profileEpics } from './profile/epics';
import { verifyEpic } from './verify-code/epics';

import { combineEpics, createEpicMiddleware } from 'redux-observable';

const rootEpic = combineEpics(
  ...profileRequestEpic,
  ...profileEpics,
  ...passwordEpic,
  ...configEpic,
  ...authRequestEpic,
  ...authEpics,
  verifyEpic,
);
const epicMiddleware = createEpicMiddleware();
// Reducers
const reducer = combineReducers({
  form: formReducer,
  profileRequest: profileRequestReducer,
  profile: profileReducer,
  auth: authReducer,
  password: passwordReducer,
  verifyCode: verifyCodeReducer,
  config: configReducer,
  authRequest: authRequestReducer,
});

export type RootActions = ActionType<| ProfileRequestActionTypesUnion
  | PasswordActionTypesUnion
  | ConfigActionTypesUnion
  | authActionTypes
  | authRequestActionTypesUnion>;

export type AppState = StateType<typeof reducer>;

function configureStore(preloadedState: any) {
  const middlewares = [ epicMiddleware ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [ middlewareEnhancer ];
  const composedEnhancers: any = composeWithDevTools(...enhancers);

  const store = createStore(reducer, preloadedState, composedEnhancers);

  epicMiddleware.run(rootEpic);

  return store;
}

export const rootStore = configureStore(undefined);
