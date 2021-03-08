import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

const PlacesList = (props) => {
  const {className, cardName, offers} = props;

  return (
    <div className={`${className} places__list`}>
      {offers.map((offer) => <PlaceCard key={offer.id} cardName={cardName} offer={offer} />)}
    </div>
  );
};

PlacesList.propTypes = {
  className: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export default PlacesList;
