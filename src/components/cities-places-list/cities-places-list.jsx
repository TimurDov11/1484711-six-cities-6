import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list';
import CitiesPlaceCard from '../cities-place-card/cities-place-card';

const CitiesPlacesList = (props) => {
  const [, setActiveCardId] = useState(``);
  const {className = ``, offers} = props;

  return (
    <PlacesList className={`cities__places-list tabs__content ${className}`} offers={offers} setActiveCardId={setActiveCardId}>
      {offers.map((offer) => <CitiesPlaceCard key={offer.id} offer={offer} setActiveCardId={setActiveCardId} />)}
    </PlacesList>
  );
};

CitiesPlacesList.propTypes = {
  className: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export default CitiesPlacesList;
