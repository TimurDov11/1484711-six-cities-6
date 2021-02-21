import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

const PlacesList = (props) => {
  const [activeCard, setaActiveCard] = useState({id: 0});
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content"
      onMouseOver={({target}) => {
        setaActiveCard({id: target.activeCard});
      }}
    >
      {offers.map((offer, i) => <PlaceCard key={offer + i} offer={offer} />)}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default PlacesList;
