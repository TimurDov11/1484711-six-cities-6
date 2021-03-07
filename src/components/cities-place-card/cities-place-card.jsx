import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import ArticlePlaceCard from '../article-place-card/article-place-card';

const CitiesPlaceCard = (props) => {
  const {className = ``, offer, setActiveCardId} = props;

  return (
    <ArticlePlaceCard className={`cities__place-card ${className}`}
      onMouseOver={() => {
        setActiveCardId(offer.id);
      }}
    >
      <PlaceCard className={`cities__image-wrapper`} offer={offer} />
    </ArticlePlaceCard>
  );
};

CitiesPlaceCard.propTypes = {
  className: PropTypes.string.isRequired,
  offer: PropTypes.object.isRequired,
  setActiveCardId: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]).isRequired,
};

export default CitiesPlaceCard;
