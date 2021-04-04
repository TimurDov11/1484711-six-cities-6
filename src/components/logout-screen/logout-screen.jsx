import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logout} from "../../store/api-actions";
import {AppRoute} from '../../const';

const LogoutScreen = ({onLogout}) => {
  onLogout();

  return (
    <Redirect to={AppRoute.ROOT} />

  );
};

LogoutScreen.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});

export {LogoutScreen};
export default connect(null, mapDispatchToProps)(LogoutScreen);
