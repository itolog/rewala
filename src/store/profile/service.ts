import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Observable, Subscribable } from 'rxjs';

import { User, UpdateUserInput } from '../../shared/generated/graphql';
import { GraphQLResponse } from '../../shared/types/garphql';

import link from '../../shared/Link/Link';
import { pluck } from "rxjs/operators";

class ProfileService {
  static getMe(): Observable<User> {
      const operation = {
          query: gql`
              query getMe {
                  me{
                      email
                      authToken
                      profile {
                          fullName
                          notifications
                      }
                  }
              }
          `,
      };
    return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ me: User }>>)
      .pipe(pluck('data'));
  }

  static upDateMe(input: UpdateUserInput): Observable<User> {
      const operation = {
          query: gql`
              mutation UpdateMe($input: UpdateUserInput) {
                  updateMe(input: $input) {
                      email
                      authToken
                      profile{
                          avatar{
                              filename
                              dir
                              mimetype
                          }
                          fullName
                          avatarId
                      }
                  }
              }
          `,
        variables: { input },
      };

    return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ updateMe: User }>>)
  }
}

export default ProfileService;
