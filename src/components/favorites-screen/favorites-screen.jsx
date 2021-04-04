import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoriteLocationItem from '../favorite-location-item/favorite-location-item';
import FavoriteEmptyItem from '../favorite-empty-item/favorite-empty-item';
import SpinnerScreen from '../spinner-screen/spinner-screen';
import {AppRoute} from '../../const';
import {fetchFavoriteHotelsList} from "../../store/api-actions";

const FavoritesScreen = (props) => {
  const {favoriteOffers, authInfo, isFavoriteOffersLoaded, onLoadData} = props;

  const favoriteCities = favoriteOffers.map((favoriteOffer) => favoriteOffer.city.name);
  const uniqueFavoriteCities = Array.from(new Set(favoriteCities));

  useEffect(() => {
    if (!isFavoriteOffersLoaded) {
      onLoadData();
    }
  }, [isFavoriteOffersLoaded]);

  return (
    <div className="page">
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
                    <span className="header__user-name user__name">{authInfo.email}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {favoriteOffers.length === 0 && isFavoriteOffersLoaded ?
        <FavoriteEmptyItem />
        :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              {isFavoriteOffersLoaded ? <h1 className="favorites__title">Saved listing</h1> : <SpinnerScreen />}
              <ul className="favorites__list">
                {uniqueFavoriteCities.map((favoriteCity) => <FavoriteLocationItem key={favoriteCity} favoriteCity={favoriteCity} cityFavoriteOffers={favoriteOffers.filter((favoriteOffer) => favoriteOffer.city.name === favoriteCity)} />)}
              </ul>
            </section>
          </div>
        </main>}
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.ROOT}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  favoriteOffers: PropTypes.array.isRequired,
  authInfo: PropTypes.object.isRequired,
  isFavoriteOffersLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: state.favoriteOffers,
  authInfo: state.authInfo,
  isFavoriteOffersLoaded: state.isFavoriteOffersLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoriteHotelsList());
  },
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
