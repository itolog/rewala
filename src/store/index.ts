import { createStore, combineReducers, applyMiddleware } from 'redux';
import { StateType, ActionType } from 'typesafe-actions';
import { composeWithDevTools } from "redux-devtools-extension";
// IMPORT REDUCERS
import { reducer as formReducer } from 'redux-form';
import { reducer as authReducer } from './auth/reducer';
// EPICS
import {
  reducer as profileReducer,
  epics as profileEpic,
  ActionTypeUnion as ProfileActionTypesUnion
} from './profile';

import { logInEpic, logOutEpic } from './auth/epics';

import { combineEpics, createEpicMiddleware } from 'redux-observable';

const rootEpic = combineEpics(
  ...profileEpic,
  logInEpic,
  logOutEpic
);
const epicMiddleware = createEpicMiddleware();
// Reducers
const reducer = combineReducers({
  form: formReducer,
  profile: profileReducer,
  auth: authReducer
});

export type RootActions = ActionType<| ProfileActionTypesUnion>;
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
