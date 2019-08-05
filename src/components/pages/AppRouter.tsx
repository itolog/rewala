import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AuthTokenService from '../../shared/services/authToken.service';
import Auth from './Auth/Auth';
import MainRouter from './Main/MainRouter';

function AppRouter() {
  const [ token, setToken ] = useState();
  useEffect(() => {
    const auth = AuthTokenService.getAuthToken().subscribe(
      (val) => setToken(val)
    );
    return () => {
      auth.unsubscribe()
    }
  }, []);
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
