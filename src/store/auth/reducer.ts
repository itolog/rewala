import { AuthState } from './types';
import { ActionTypes, ActionTypeUnion } from './actions';

const initialState: AuthState = {
  isAuth: null,
  token: null,
  error: null
};

export function reducer(state = initialState, action: ActionTypeUnion): AuthState {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCEDED: {
      return  {
        ...state,
        isAuth: true,
        token: action.payload
      }
    }
    case ActionTypes.LOGIN_FAILED: {
      return {
        ...state,
        isAuth: false,
        error: action.payload
      }
    }
    case ActionTypes.LOG_OUT__SUCCEDED: {
      return {
        error: null,
        isAuth: null,
        token: null
      }
    }
    default : {
      return state
    }
  }
}
