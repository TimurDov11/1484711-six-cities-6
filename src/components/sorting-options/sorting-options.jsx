import React from 'react';
import PropTypes from 'prop-types';
import {SORTING_OPTIONS} from '../../const';

const SortingOptions = (props) => {
  const {option, onOptionClick, isOptionsOpened, onOptionsFormClick} = props;

  return (
    <form className="places__sorting" action="#" method="get"
      onClick={(evt) => {
        evt.preventDefault();
        onOptionsFormClick();
      }}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {option}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOptionsOpened ? `places__options--opened` : ``}`}>
        {Object.values(SORTING_OPTIONS).map((optionName) => {
          return (
            <li key={optionName} className={`places__option ${option === optionName && `places__option--active`}`} tabIndex="0"
              onClick={(evt) => {
                evt.preventDefault();
                onOptionClick(optionName);
              }}
            >
              {optionName}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

SortingOptions.propTypes = {
  option: PropTypes.string.isRequired,
  onOptionClick: PropTypes.func.isRequired,
  isOptionsOpened: PropTypes.bool.isRequired,
  onOptionsFormClick: PropTypes.func.isRequired,
};

export default SortingOptions;
