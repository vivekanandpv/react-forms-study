import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../components/Home.jsx'));
const LoginForm = React.lazy(() => import('../components/LoginForm.jsx'));
const NotFound = React.lazy(() => import('../components/NotFound.jsx'));

const PrimaryRoutes = (props) => {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={LoginForm}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
      </React.Suspense>
    </>
  );
};

export default PrimaryRoutes;
