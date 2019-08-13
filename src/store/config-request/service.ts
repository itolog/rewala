import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Subscribable } from 'rxjs';

import { pluck } from 'rxjs/operators';
import { Config } from '../../shared/generated/graphql';
import link from '../../shared/Link/Link';
import { GraphQLResponse } from '../../shared/types/garphql';

class ConfigService {
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

export default ConfigService;
