import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Subscribable } from 'rxjs';

import { GraphQLResponse } from '../../shared/types/garphql';

import { ChangePasswordInput, ResetPasswordConfirmInput, User } from '../../shared/generated/graphql';
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

    return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ changePassword: User }>>)
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

    return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ resetPassword: boolean }>>)
  }

  static resetPasswordConfirmForm(input: string) {
      const operation = {
          query: gql`
              mutation resetPasswordConfirmCode($input: String) {
                  resetPasswordConfirmCode(resetPasswordCode: $input)
              }
          `,
        variables: { input },
      };

      return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{resetPasswordConfirmCode: boolean}>>)
  }

  static changePasswordConfirm(input: ResetPasswordConfirmInput) {
      const operation = {
          query: gql`
              mutation ResetPasswordConfirm($input: ResetPasswordConfirmInput) {
                  resetPasswordConfirm(input: $input)
              }
          `,
        variables: { input },
      };

    return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{resetPasswordConfirm: boolean}>>)
  }
}

export default PasswordService;
