import {ActionTypeUnion, ActionTypes} from './actions';
import {ProfileState} from './types';

const initialState: ProfileState = {
    me: {
        email: '',
        profile: {
            fullName: '',
            notifications: false
        }
    }
};

export function reducer(state = initialState, action: ActionTypeUnion): ProfileState {
    switch (action.type) {
        case ActionTypes.GET_ME_SUCCESS: {
            return {
                ...state,
                me: action.payload
            }
        }
        default: {
            return state;
        }
    }
}