import { ActionTypes, ActionTypeUnion } from './actions';
import { CodeState } from './types';

const initialState: CodeState = {
  code: null,
};

export function reducer(state = initialState, action: ActionTypeUnion): CodeState {
  switch (action.type) {
    case ActionTypes.VERIFY_CODE_REQUEST_SUCCEDED: {
      return {
        code: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
