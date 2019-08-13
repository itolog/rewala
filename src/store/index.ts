import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// IMPORT REDUCERS
import { reducer as formReducer } from 'redux-form';
import { ActionType, StateType } from 'typesafe-actions';
import { ActionTypeUnion as authActionTypes } from './auth/actions';
import { reducer as authReducer } from './auth/reducer';
import { reducer as verifyCodeReducer } from './verify-code/reducer';

import {
  ActionTypeUnion as ProfileActionTypesUnion,
  epics as profileEpic,
  reducer as profileReducer,
} from './profile';

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

import {
  ActionTypeUnion as registrationActionTypesUnion,
  epics as registrationEpic,
  reducer as registrationReducer,
} from './registration';

// REFACTORING STORE
import {
  ActionTypeUnion as authRequestActionTypesUnion,
  epics as authRequestEpic,
  reducer as authRequestReducer,
} from './auth-request';

// EPICS
import { epics as authEpics } from './auth/epics';
import { verifyEpic } from './verify-code/epics';

import { combineEpics, createEpicMiddleware } from 'redux-observable';

const rootEpic = combineEpics(
  ...profileEpic,
  ...passwordEpic,
  ...configEpic,
  ...registrationEpic,
  ...authRequestEpic,
  ...authEpics,
  verifyEpic,
);
const epicMiddleware = createEpicMiddleware();
// Reducers
const reducer = combineReducers({
  form: formReducer,
  profile: profileReducer,
  auth: authReducer,
  password: passwordReducer,
  verifyCode: verifyCodeReducer,
  config: configReducer,
  registration: registrationReducer,

  authRequest: authRequestReducer,
});

export type RootActions = ActionType<| ProfileActionTypesUnion
  | PasswordActionTypesUnion
  | ConfigActionTypesUnion
  | registrationActionTypesUnion
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
