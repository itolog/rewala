import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Observable, Subscribable } from 'rxjs';

import { LoginInput, LogOutInput, User } from '../../shared/generated/graphql';
import { GraphQLResponse } from '../../shared/types/garphql';

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
}

export default AuthService;
