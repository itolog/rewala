import { ActionTypes, ActionTypeUnion } from './actions';
import { ProfileState } from './types';

const initialState: ProfileState = {
  data: null,
  errors: null,
};

export function reducer(state = initialState, action: ActionTypeUnion): ProfileState {
  switch (action.type) {
    case ActionTypes.GET_ME_SUCCEDED: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case ActionTypes.GET_ME_FAILED: {
      return {
        ...state,
        errors: action.payload,
      };
    }
    case ActionTypes.REGISTRATION_SUCCEDED: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case ActionTypes.REGISTRATION_FAILED: {
      return {
        ...state,
        errors: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
