import React from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";


import './App.css';

import AppRouter from './pages/AppRouter';

const client = new ApolloClient({
    uri: "https://rewala-api.2mc.team/graphql",
    headers: {
        "Authorization": `Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjYzOTQwMTAsImlhdCI6MTU2NDY2NjAxMH0.BZoRIs9hX6ZQhmSmBFHD1_zLnaSADfaeGqjiBE9z5rI`
    }
});


const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <AppRouter/>
        </ApolloProvider>
    );
};

export default App;
