import PropTypes from 'prop-types';

export default PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
}).isRequired;
