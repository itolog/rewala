import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Observable, Subscribable } from 'rxjs';

import link from '../../shared/Link/Link';
import { Config } from '../../shared/generated/graphql';
import { GraphQLResponse } from '../../shared/types/garphql';
import { pluck } from 'rxjs/operators';

class ConfigService {
  static getConfig(): Observable<Config> {
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

    return from(execute(link, operation) as unknown as Subscribable<GraphQLResponse<{ config: Config }>>).pipe(
      pluck('data')
    )
  }
}

export default ConfigService;
