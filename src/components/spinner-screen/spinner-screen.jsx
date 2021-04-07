import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const SpinnerScreen = ({isServerAvailable}) => {

  return (
    <>
      {isServerAvailable ? <p>Loading ...</p> : <p>Server is not available</p>}
    </>
  );
};

SpinnerScreen.propTypes = {
  isServerAvailable: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isServerAvailable: state.isServerAvailable,
});

export {SpinnerScreen};
export default connect(mapStateToProps, null)(SpinnerScreen);
