import React, { Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from '../../../shared/components/Header/Header';

import NoMatch from '../../../shared/components/NoMatch/NoMatch';
import Loader from '../../../shared/components/Loader/Loader';

const Search = React.lazy(() => import('./Search/Search'));
const Home = React.lazy(() => import('./Home/Home'));
const Profile = React.lazy(() => import('./Profile/Profile'));
const ProfileSettings = React.lazy(() => import('./ProfileSettings/ProfileSettings'));

// import Search from './Search/Search';
// import Home from  './Home/Home';
// import Profile from './Profile/Profile';
// import ProfileSettings from './ProfileSettings/ProfileSettings';

function MainRouter() {
  return (
    <Router>
      <Header/>
      <Suspense fallback={<Loader/>}>

        {/*<Route render={({location}: RouteComponentProps) => (*/}
        {/*  <TransitionGroup component={null}>*/}
        {/*    <CSSTransition*/}
        {/*      key={location.key}*/}
        {/*      classNames="slide"*/}
        {/*      in={true}*/}
        {/*      appear={true}*/}
        {/*      timeout={300}*/}
        {/*    >*/}

        {/*      <Switch location={location}>*/}
        {/*        <Route path="/" exact component={Home}/>*/}
        {/*        <Route path="/search/"  component={Search}/>*/}
        {/*        <Route path="/profile/"  component={Profile}/>*/}
        {/*        <Route path="/settings/"  component={ProfileSettings}/>*/}

        {/*        <Route component={NoMatch}/>*/}
        {/*      </Switch>*/}
        {/*    </CSSTransition>*/}
        {/*  </TransitionGroup>*/}
        {/*)} />*/}
        {/*<TransitionGroup>*/}
        {/*  <CSSTransition*/}
        {/*    key={location.key}*/}
        {/*    classNames="fade"*/}
        {/*    in={true}*/}
        {/*    appear={true}*/}
        {/*    timeout={300}*/}
        {/*  >*/}

            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/search/" exact component={Search}/>
              <Route path="/profile/" exact component={Profile}/>
              <Route path="/settings/" exact component={ProfileSettings}/>

              <Route component={NoMatch}/>
            </Switch>
      </Suspense>
    </Router>
  );
}

export default withRouter(MainRouter);
