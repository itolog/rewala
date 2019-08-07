import { CodeState } from './types';
import { ActionTypes, ActionTypeUnion } from './actions';

const initialState: CodeState = {
  code: null,
};

export function reducer(state = initialState, action: ActionTypeUnion): CodeState {
  switch (action.type) {
    case ActionTypes.VERIFY_CODE_REQUEST_SUCCEDED: {
      return {
        code: action.payload
      }
    }
    case ActionTypes.VERIFY_CODE_REMOVE: {
      return {
        code: null
      }
    }
    default: {
      return state
    }
  }
}
