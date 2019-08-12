import { Observable } from 'rxjs';
import { Action } from 'typesafe-actions';
import { Epic } from 'redux-observable';
import ProfileService from '../service';
import { User, UpdateUserInput } from '../../../shared/generated/graphql';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';
import { tap } from 'rxjs/operators';


const {
  effect,
  reducer,
  ActionTypes,
  Actions,
} = asyncActionHandlerFactory<UpdateUserInput, User, Error>('UPDATE_ME_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
  actions$,
  (payload) => {
    console.log('payload', payload);
    return ProfileService.upDateMe(payload).pipe(
      tap((val) => console.log(val))
    );
  },
);

export { epic, reducer, Actions, ActionTypes };
