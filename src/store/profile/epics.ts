import {Observable, of} from 'rxjs';
import {Action} from 'typesafe-actions';
import {Epic, ofType} from 'redux-observable';
import {ActionTypes, Actions} from './actions';
import {switchMap} from "rxjs/operators";

export const fetchMe: Epic = (action$: Observable<Action>) => {
    return action$.pipe(
        ofType(ActionTypes.GET_ME),
        switchMap(({payload}: any): any => {
            const result = {
                email: payload.me.email,
                profile: {
                    fullName: payload.me.profile.fullName,
                    notifications: payload.me.profile.notifications
                }
            };
            return of(Actions.getMeSuccess(result))
        })
    );
};
