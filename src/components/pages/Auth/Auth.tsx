import React from 'react';
import gql from "graphql-tag";
import {Mutation} from "react-apollo";
import './auth.css'

import {authTokenService} from '../../../shared/services/authToken.service';
import LoginForm from './LoginForm/LoginForm';

const LOG_IN = gql`
    mutation LogIn($userLog: LoginInput) {
        login(input: $userLog) {
            _id
            authToken
        }
    }
`;

export const Auth = () => {
    const loginSubmit = (login: any, values: any) => {
        login({
            variables: {
                "userLog": values
            }
        });
    };

    const loginMutation = (data: any) => {
        authTokenService.setAuthToken(data.login.authToken);
        window.location.reload()
    }

    return (
        <div className='auth'>
            <h1>Rewala YoYo</h1>
            <br/>

            <Mutation
                mutation={LOG_IN}
                onCompleted={(data: any) => loginMutation(data)}
            >
                {(login: any, {loading, error}: any) => (
                    <div>
                        <LoginForm
                            onSubmit={(values) => loginSubmit(login, values)}
                        />
                        {loading && <p>Loging...</p>}
                        {error && <p>{error.toString()}</p>}
                    </div>
                )}
            </Mutation>
        </div>
    )
};

export default Auth;