import React from 'react';
import gql from "graphql-tag";
import {Mutation} from "react-apollo";

import Button from '@material-ui/core/Button';

import {authTokenService} from '../../../../../shared/services/authToken.service';

const LOG_OUT = gql`
    mutation LogOut($out: LogOutInput) {
        logout(input: $out)
    }
`;

const logOutMutatation = () => {
    authTokenService.removeAuthToken();
    window.location.reload();
};

const logOut = (logout: any, data: any) => {
    console.log(data);
    logout({
        variables: {
            "out": {
                "FCMToken": `${authTokenService.getAuthToken()}`
            }
        }
    })
};

const LogOut = () => {
    return (
        <Mutation
            mutation={LOG_OUT}
            onCompleted={logOutMutatation}
        >
            {(logout: any, {loading, error, data}: any) => (
                <>
                <Button variant="outlined" color="secondary" onClick={() => logOut(logout, data)}>
                    Log Out
                </Button>
                    {loading && <p>logOut requests....</p>}
                    {error && <p>{error.toString()}</p>}
                </>
            )}
        </Mutation>
    )
};

export default LogOut;