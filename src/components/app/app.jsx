import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const App = (props) => {
  const {offers} = props;
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const favoriteCities = favoriteOffers.map((favoriteOffer) => favoriteOffer.city.name);
  const uniqueFavoriteCities = Array.from(new Set(favoriteCities));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            favoriteOffers={favoriteOffers}
            uniqueFavoriteCities={uniqueFavoriteCities}
          />
        </Route>
        <Route exact path="/offer/:id">
          <PropertyScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  //  reviews: PropTypes.array.isRequired,
};

export default App;
