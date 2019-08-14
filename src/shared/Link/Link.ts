import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';

import { map } from 'rxjs/operators';
import { Config } from '../../environments/environment';

import AuthTokenService from '../services/authToken.service';

const authMiddleware = setContext(() => {
  return AuthTokenService.getAuthToken()
    .pipe(
      map(userToken => {
        return {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        };
      }),
    ).toPromise();
});
const httpLink = createHttpLink({
  uri: Config.apiEndpoint,
});

const link = ApolloLink.from([
  authMiddleware,
  httpLink,
]);

export default link;
