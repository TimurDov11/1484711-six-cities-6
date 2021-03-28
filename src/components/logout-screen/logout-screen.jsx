import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logout} from "../../store/api-actions";
import {AuthorizationStatus} from '../../const';

const LogoutScreen = ({authorizationStatus, onLogout}) => {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    onLogout();
  }

  return (
    <Redirect to={`/`} />
  );
};

LogoutScreen.propTypes = {
  onLogout: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});

export {LogoutScreen};
export default connect(mapStateToProps, mapDispatchToProps)(LogoutScreen);
