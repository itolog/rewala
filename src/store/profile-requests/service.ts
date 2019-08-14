import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Observable, Subscribable } from 'rxjs';

import { UpdateUserInput, User, UserInput } from '../../shared/generated/graphql';
import { GraphQLResponse } from '../../shared/types/garphql';

import { pluck } from 'rxjs/operators';
import link from '../../shared/Link/Link';

class ProfileService {
  static getMe(): Observable<any> {
      const operation = {
          query: gql`
              query getMe {
                  me{
                      email
                      authToken
                      profile {
                          fullName
                          notifications
                          avatar{
                              filename
                          }
                      }
                  }
              }
          `,
      };
      return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ me: User }>>)
      .pipe(pluck('data'));
  }

  static upDateMe(input: UpdateUserInput): Observable<any> {
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

      return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ updateMe: User }>>);
  }

  static registration(input: UserInput): Observable<any> {
      const operation = {
          query: gql`
              mutation Registration($input: UserInput) {
                  registration(input: $input) {
                      _id
                      email
                      authToken
                      profile {
                          fullName
                          phone
                      }
                  }
              }
          `,
        variables: { input },
      };

      return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ registration: User }>>);
  }
}

export default ProfileService;
