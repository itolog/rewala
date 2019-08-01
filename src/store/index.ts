import { createStore, combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import {  StateType } from 'typesafe-actions';
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
const reducer = combineReducers({
    form: formReducer
});

export type AppState = StateType<typeof reducer>;

function configureStore(preloadedState: any) {
    // const middlewares = [ epicMiddleware];
    // const middlewareEnhancer = applyMiddleware(...middlewares);

    // const enhancers = [middlewareEnhancer];
    const composedEnhancers: any = composeWithDevTools();

    const store = createStore(reducer, preloadedState, composedEnhancers);

    // epicMiddleware.run(rootEpic);

    return store;
}

export const rootStore = configureStore(undefined);