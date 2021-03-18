import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import SortingOptions from '../sorting-options/sorting-options';
import CitiesList from '../cities-list/cities-list';
import PlacesList from '../places-list/places-list';
import {CardName} from '../../const';
import Map from '../map/map';

const MainScreen = (props) => {
  const [activeCardId, setActiveCardId] = useState(``);
  const {city, offers, option, onCityClick, onOptionClick, isOptionsOpened, onOptionsFormClick} = props;

  const offersNumber = offers.length;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList city={city} onCityClick={onCityClick} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersNumber} places to stay in {city}</b>
              {offers.length > 0 && <SortingOptions option={option} onOptionClick={onOptionClick} isOptionsOpened={isOptionsOpened} onOptionsFormClick={onOptionsFormClick} />}
              <PlacesList cardName={CardName.CITIES} className={`cities__places-list tabs__content`} offers={offers} setActiveCardId={setActiveCardId} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">{offersNumber > 0 && <Map offers={offers} activeCardId={activeCardId} />}</section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  option: PropTypes.string.isRequired,
  isOptionsOpened: PropTypes.bool.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onOptionClick: PropTypes.func.isRequired,
  onOptionsFormClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers.filter((offer) => offer.city.name === state.city),
  option: state.option,
  isOptionsOpened: state.isOptionsOpened,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onOptionClick(option) {
    dispatch(ActionCreator.changeOption(option));
  },
  onOptionsFormClick() {
    dispatch(ActionCreator.toggleOptionsPopup());
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
