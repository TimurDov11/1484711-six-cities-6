import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list';
import NearPlacesCard from '../near-places-card/near-places-card';

const NearPlacesList = (props) => {
  const {className = ``, offers} = props;

  return (
    <PlacesList className={`near-places__list ${className}`} offers={offers}>
      {offers.map((offer) => <NearPlacesCard key={offer.id} offer={offer} />)}
    </PlacesList>
  );
};

NearPlacesList.propTypes = {
  className: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export default NearPlacesList;
