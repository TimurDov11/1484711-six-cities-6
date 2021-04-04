import PropTypes from 'prop-types';

export default PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  goods: PropTypes.array.isRequired,
  host: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
}).isRequired;
