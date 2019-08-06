import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Subscribable } from 'rxjs';

import { GraphQLResponse } from '../../shared/types/garphql';

import { ChangePasswordInput } from '../../shared/generated/graphql';
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
}

export default PasswordService;
