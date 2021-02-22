import React from 'react';
import PropTypes from 'prop-types';
import FavoritePlaceCard from '../favorite-place-card/favorite-place-card';

const FavoriteLocationItem = (props) => {
  const {favoriteCity, cityFavoriteOffers} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favoriteCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cityFavoriteOffers.map((cityFavoriteOffer) => <FavoritePlaceCard key={cityFavoriteOffer.id} cityFavoriteOffer={cityFavoriteOffer} />)}
      </div>
    </li>
  );
};

FavoriteLocationItem.propTypes = {
  favoriteCity: PropTypes.string.isRequired,
  cityFavoriteOffers: PropTypes.array.isRequired,
};

export default FavoriteLocationItem;
