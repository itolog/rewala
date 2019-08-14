import { Epic } from 'redux-observable';
import { Observable } from 'rxjs';
import { Action } from 'typesafe-actions';
import { UpdateUserInput, User } from '../../../shared/generated/graphql';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
import ProfileService from '../service';

const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<UpdateUserInput, User, Error>('UPDATE_ME_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  (payload) => {
    return ProfileService.upDateMe(payload);
  },
);

export { epic, reducer, Actions, ActionTypes };
