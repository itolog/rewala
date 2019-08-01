import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Auth from './Auth/Auth';
import MainRouter from './Main/MainRouter';

function AppRouter() {
    const loggedIn = true;
    return (
        <Router>
            <>
                <Route
                    exact path='/' render={() => (
                    loggedIn ? (
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