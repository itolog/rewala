import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../../../shared/components/Header/Header';

import Loader from '../../../shared/components/Loader/Loader';

const Search = React.lazy(() => import('./Search/Search'));
const Home = React.lazy(() => import('./Home/Home'));
const Profile = React.lazy(() => import('./Profile/Profile'));
const ProfileSettings = React.lazy(() => import('./ProfileSettings/ProfileSettings'));
const NoMatch = React.lazy(() => import('../../../shared/components/NoMatch/NoMatch'));

function MainRouter() {
  return (
    <Router>
      <Header/>
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/search/' exact={true} component={Search}/>
          <Route path='/profile/' exact={true} component={Profile}/>
          <Route path='/settings/' exact={true} component={ProfileSettings}/>

          <Route component={NoMatch}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default MainRouter;
