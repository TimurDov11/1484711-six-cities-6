import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import ArticlePlaceCard from '../article-place-card/article-place-card';

const NearPlacesCard = (props) => {
  const {className = ``, offer} = props;

  return (
    <ArticlePlaceCard className={`near-places__card ${className}`}>
      <PlaceCard className={`near-places__image-wrapper`} offer={offer} />
    </ArticlePlaceCard>
  );
};

NearPlacesCard.propTypes = {
  className: PropTypes.string.isRequired,
  offer: PropTypes.object.isRequired,
};

export default NearPlacesCard;
