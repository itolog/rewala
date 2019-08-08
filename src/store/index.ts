import { createStore, combineReducers, applyMiddleware } from 'redux';
import { StateType, ActionType } from 'typesafe-actions';
import { composeWithDevTools } from "redux-devtools-extension";
// IMPORT REDUCERS
import { reducer as formReducer } from 'redux-form';
import { reducer as authReducer } from './auth/reducer';
import { reducer as verifyCodeReducer } from './verify-code/reducer';

import {
  reducer as profileReducer,
  epics as profileEpic,
  ActionTypeUnion as ProfileActionTypesUnion
} from './profile';

import {
  reducer as passwordReducer,
  epics as passwordEpic,
  ActionTypeUnion as PasswordActionTypesUnion
} from './password';

import {
  reducer as configReducer,
  epics as configEpic,
  ActionTypeUnion as ConfigActionTypesUnion
} from './config-request';
// EPICS
import { logInEpic, logOutEpic } from './auth/epics';
import { verifyEpic } from './verify-code/epics';

import { combineEpics, createEpicMiddleware } from 'redux-observable';

const rootEpic = combineEpics(
  ...profileEpic,
  ...passwordEpic,
  ...configEpic,
  logInEpic,
  logOutEpic,
  verifyEpic
);
const epicMiddleware = createEpicMiddleware();
// Reducers
const reducer = combineReducers({
  form: formReducer,
  profile: profileReducer,
  auth: authReducer,
  password: passwordReducer,
  verifyCode: verifyCodeReducer,
  config: configReducer
});

export type RootActions = ActionType<| ProfileActionTypesUnion | PasswordActionTypesUnion | ConfigActionTypesUnion>;
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
