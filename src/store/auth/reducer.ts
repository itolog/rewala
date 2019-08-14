import { ActionTypes, ActionTypeUnion } from './actions';
import { AuthState } from './types';

const initialState: AuthState = {
  isAuth: null,
  token: null,
  error: null,
  data: null,
};

export function reducer(state = initialState, action: ActionTypeUnion): AuthState {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCEDED: {
      return {
        ...state,
        isAuth: true,
        token: action.payload,
      };
    }
    case ActionTypes.LOGIN_FAILED: {
      return {
        ...state,
        isAuth: false,
        error: action.payload,
      };
    }
    case ActionTypes.LOG_OUT_SUCCEDED: {
      return {
        data: null,
        error: null,
        isAuth: null,
        token: null,
      };
    }
    case ActionTypes.LOG_OUT_FAILED: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ActionTypes.REGISTRATION_SUCCEDED: {
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    }
    case ActionTypes.REGISTRATION_FAILED: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default : {
      return state;
    }
  }
}
