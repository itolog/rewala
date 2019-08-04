import {Observable} from 'rxjs';
import {Action} from 'typesafe-actions';
import {Epic} from 'redux-observable';
import ProfileService from '../service';
import { User } from '../../../shared/generated/graphql';
import { asyncActionHandlerFactory } from '../../utils/async-action-helper';


const {
    effect,
    reducer,
    ActionTypes,
    Actions,
} = asyncActionHandlerFactory<string, User, Error>('GET_ME_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(
    actions$,
    () => ProfileService.getMe(),
);

export { epic, reducer, Actions, ActionTypes };