import { Epic, ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';

import { switchMap } from 'rxjs/operators';
import { Actions, ActionTypes, ActionTypeUnion } from './actions';

export const verifyEpic: Epic = (action$: Observable<ActionTypeUnion>) => action$.pipe(
  ofType(ActionTypes.VERIFY_CODE_REQUEST),
  switchMap(({ payload }: any) => {
    return of(Actions.requestVerifySuccesse(payload));
  }),
);
