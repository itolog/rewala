import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Subscribable } from 'rxjs';

import { GraphQLResponse } from '../types/garphql';

import { ChangePasswordInput } from '../generated/graphql';
import link from '../../shared/Link/Link';
// import { pluck } from 'rxjs/operators';

class PasswordService {
  static changePassword(input: ChangePasswordInput) {
      const operation = {
          query: gql`
              mutation ChangePassword($input: ChangePasswordInput) {
                  changePassword(input: $input) {
                      authToken
                      email
                  }
              }
          `,
        variables: { input },
      };

    return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ changePassword: ChangePasswordInput }>>)
  }

  static resetPassword(input: string) {
      const operation = {
          query: gql`
              mutation ResetPassword($input: String) {
                  resetPassword(email: $input)
              }
          `,
        variables: { input },
      };

    return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ email: string }>>)
  }
}

export default PasswordService;
