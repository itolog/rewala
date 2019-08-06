import React from 'react';
import ApolloClient from "apollo-boost";

import AuthTokenService from '../shared/services/authToken.service';
import './App.css';

import AppRouter from './pages/AppRouter';

const client = new ApolloClient({
    uri: "https://rewala-api.2mc.team/graphql",
    headers: {
        "Authorization": `Bearer ${AuthTokenService.getAuthToken()}`
    }
});


const App: React.FC = () => {
    return (

            <AppRouter/>

    );
};

export default App;
