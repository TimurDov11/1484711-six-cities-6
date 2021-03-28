import React from 'react';
//  import PropTypes from 'prop-types';
import {Switch, Route, Router} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LogoutScreen from '../logout-screen/logout-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";

const App = () => {

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <PrivateRoute exact
          path="/favorites"
          render={() => <FavoritesScreen />}
        >
        </PrivateRoute>
        <Route exact path="/offer/:id">
          <PropertyScreen />
        </Route>
        <Route exact path="/logout">
          <LogoutScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
