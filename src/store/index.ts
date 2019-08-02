import {createStore, combineReducers, applyMiddleware} from 'redux';

import {reducer as formReducer} from 'redux-form';
import {reducer as profile} from './profile/reducers';

import {StateType} from 'typesafe-actions';
import {composeWithDevTools} from "redux-devtools-extension";
// EPICS
import {fetchMe} from './profile/epics';
import {combineEpics, createEpicMiddleware} from 'redux-observable';

const rootEpic = combineEpics(
    fetchMe
);
const epicMiddleware = createEpicMiddleware();
// Reducers
const reducer = combineReducers({
    form: formReducer,
    profile
});

export type AppState = StateType<typeof reducer>;

function configureStore(preloadedState: any) {
    const middlewares = [epicMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers: any = composeWithDevTools(...enhancers);

    const store = createStore(reducer, preloadedState, composedEnhancers);

    epicMiddleware.run(rootEpic);

    return store;
}

export const rootStore = configureStore(undefined);