import React from 'react';
import PropTypes from 'prop-types';

const PlacesList = (props) => {
  const {className} = props;

  return (
    <div className={`places__list ${className}`}>
      {props.children}
    </div>
  );
};

PlacesList.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default PlacesList;
