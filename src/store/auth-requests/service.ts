import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Observable, Subscribable } from 'rxjs';

import { Config, LoginInput, LogOutInput, User, UserInput } from '../../shared/generated/graphql';
import { GraphQLResponse } from '../../shared/types/garphql';

import { pluck } from 'rxjs/operators';
import link from '../../shared/Link/Link';

class AuthService {
  static logIn(input: LoginInput): Observable<any> {
      const operation = {
          query: gql`
              mutation LoginUser($input: LoginInput) {
                  login(input: $input) {
                      _id
                      email
                      status
                      authToken
                      rewalsCount
                      profile {
                          fullName
                          _id
                      }
                  }
              }
          `,
        variables: { input },
      };

      return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ login: User }>>);
  }

  static logOut(input: LogOutInput): Observable<any> {
      const operation = {
          query: gql`
              mutation LogOut($input: LogOutInput!) {
                  logout(input: $input)
              }
          `,
        variables: { input },
      };
      return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ logout: boolean }>>);
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

    static getConfig() {
        const operation = {
            query: gql`
                query getConfig {
                    config{
                        countries{
                            code
                            shortName
                            flag
                        }
                    }
                }
            `,
        };

        return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<Config>>).pipe(
          pluck('data'),
        );
    }
}

export default AuthService;
