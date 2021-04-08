import React, {useRef} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import {ActionCreator} from '../../store/action';
import {AuthorizationStatus, AppRoute} from '../../const';

const LoginScreen = ({city, onSubmit, authorizationStatus, isLoginFormSubmitDisabled, onFormSubmitActivate}) => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleLoginChange = (evt) => {
    evt.preventDefault();

    const REG_EXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!REG_EXP.test(loginRef.current.value)) {
      onFormSubmitActivate(true);
    }

    if (REG_EXP.test(loginRef.current.value)) {
      onFormSubmitActivate(false);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    })
    .catch(() => {
      loginRef.current.value = `invalid login`;
    });
  };

  return (
    authorizationStatus === AuthorizationStatus.AUTH
      ? <Redirect to={AppRoute.ROOT} />
      :
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to={AppRoute.ROOT}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={handleLoginChange} />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required="" />
                </div>
                <button className="login__submit form__submit button" type="submit" disabled={isLoginFormSubmitDisabled}>Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
  );
};

LoginScreen.propTypes = {
  city: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isLoginFormSubmitDisabled: PropTypes.bool.isRequired,
  onFormSubmitActivate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  authorizationStatus: state.authorizationStatus,
  isLoginFormSubmitDisabled: state.isLoginFormSubmitDisabled,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    return dispatch(login(authData));
  },
  onFormSubmitActivate(boolean) {
    dispatch(ActionCreator.toggleLoginSubmitState(boolean));
  },
});

export {LoginScreen};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
