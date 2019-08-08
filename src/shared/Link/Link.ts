import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { onError } from "apollo-link-error";

import { map } from 'rxjs/operators';

import AuthTokenService from "../services/authToken.service";

const errorMiddleware = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authMiddleware = setContext(() => {
  return AuthTokenService.getAuthToken()
    .pipe(
      map(userToken => {
        return {
          headers: {
            authorization: `Bearer ${userToken}` ,
          },
        };
      }),
    ).toPromise();
});
const httpLink = createHttpLink({
  uri: "https://rewala-api.2mc.team/graphql"
});

const link = ApolloLink.from([
  authMiddleware,
  errorMiddleware,
  httpLink
]);

export default link;
