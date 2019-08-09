import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../../shared/components/Header/Header';

import NoMatch from '../../../shared/components/NoMatch/NoMatch';
import Loader from '../../../shared/components/Loader/Loader';

const Search = React.lazy(() => import('./Search/Search'));
const Home = React.lazy(() => import('./Home/Home'));
const Profile = React.lazy(() => import('./Profile/Profile'));
const ProfileSettings = React.lazy(() => import('./ProfileSettings/ProfileSettings'));


function MainRouter() {
  return (
    <Router>
      <Header/>
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/search/" component={Search}/>
          <Route path="/profile/" component={Profile}/>
          <Route path="/settings/" component={ProfileSettings}/>

          <Route component={NoMatch}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default MainRouter;
