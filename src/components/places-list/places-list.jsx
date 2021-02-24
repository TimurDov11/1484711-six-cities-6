import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

const PlacesList = (props) => {
  const [, setActiveCardId] = useState(``);
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} setActiveCardId={setActiveCardId} />)}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default PlacesList;
