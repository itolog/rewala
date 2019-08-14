import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from '../../../shared/components/Loader/Loader';

const Auth = React.lazy(() => import('./Auth/Auth'));
const Registration = React.lazy(() => import('./Registration/Registration'));
const NoMatch = React.lazy(() => import('../../../shared/components/NoMatch/NoMatch'));

export default function AuthRouter() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route path='/' exact={true} component={Auth}/>
          <Route path='/registration/' component={Registration}/>

          <Route component={NoMatch}/>
        </Switch>
      </Suspense>
    </Router>
  );
}
