import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {authTokenService} from '../../shared/services/authToken.service';
import Auth from './Auth/Auth';
import MainRouter from './Main/MainRouter';

function AppRouter() {
    const [token, setToken] = useState(authTokenService.getAuthToken());
    return (
        <Router>
            <>
                <Route
                    exact path='/' render={() => (
                    !token ? (
                        <Auth/>
                    ) : (
                        <MainRouter/>
                    )
                )}
                />
            </>
        </Router>
    );
}

export default AppRouter;