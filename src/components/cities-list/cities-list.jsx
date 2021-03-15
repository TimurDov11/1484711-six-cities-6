import React from 'react';
import PropTypes from 'prop-types';
import {CITIES} from '../../const';

const CitiesList = (props) => {
  const {city, onCityClick} = props;

  return (
    <ul className="locations__list tabs__list">
      {Object.values(CITIES).map((cityName) => {
        return (
          <li key={cityName} className="locations__item"
            onClick={(evt) => {
              evt.preventDefault();
              onCityClick(cityName);
            }}
          >
            <a className={`locations__item-link tabs__item ${city === cityName && `tabs__item--active`}`} href="#">
              <span>{cityName}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default CitiesList;
