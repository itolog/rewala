import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Observable, Subscribable } from 'rxjs';

import { User, UserInput } from '../../shared/generated/graphql';
import link from '../../shared/Link/Link';
import { GraphQLResponse } from '../../shared/types/garphql';

class Registration {
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

export default Registration;
