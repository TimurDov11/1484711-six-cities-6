import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logout} from "../../store/api-actions";
import {AuthorizationStatus} from '../../const';

const NotFoundScreen = ({authorizationStatus, onLogout}) => {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    onLogout();
  }

  return (
    <div className="page">
      <section className="page__main">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </div>
  );
};

NotFoundScreen.propTypes = {
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

export {NotFoundScreen};
export default connect(mapStateToProps, mapDispatchToProps)(NotFoundScreen);
