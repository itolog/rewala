import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from 'apollo-link';
import { onError } from "apollo-link-error";

import {authTokenService} from "../services/authToken.service";

const errorMiddleware = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
    uri: "https://rewala-api.2mc.team/graphqll" ,
    headers: {
        "Authorization": `Bearer ${authTokenService.getAuthToken()}`
    }
});
const link = ApolloLink.from([
    errorMiddleware,
    httpLink
]);

export default link;