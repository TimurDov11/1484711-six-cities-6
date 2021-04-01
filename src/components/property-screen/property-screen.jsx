import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, useParams, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';
import PlacesList from '../places-list/places-list';
import SpinnerScreen from '../spinner-screen/spinner-screen';
import {IMAGES_NUMBER, HousingType, CardName, AuthorizationStatus, createStarsNumber} from '../../const';
import Map from '../map/map';
import {fetchHotelId, fetchHotelsNearbyHotelId} from "../../store/api-actions";
//  import propertyScreenProp from './property-screen.prop';

const PropertyScreen = (props) => {
  const {id} = useParams();
  const {offer, nearbyOffers, onLoadData, authorizationStatus, authInfo} = props;

  useEffect(() => {
    if (Object.entries(offer).length === 0 || nearbyOffers.length === 0) {
      onLoadData(id);
    }
  }, []);

  useEffect(() => {
    if (id !== offer.id && offer.id !== undefined) {
      onLoadData(id);
    }
  }, [id]);

  if (Object.entries(offer).length === 0 || nearbyOffers.length === 0) {
    return (
      <SpinnerScreen />
    );
  }

  const totalOffers = nearbyOffers.slice();
  totalOffers.unshift(offer);

  const history = useHistory();

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {authorizationStatus === AuthorizationStatus.AUTH ? <span className="header__user-name user__name">{authInfo.email}</span> : <span className="header__login">Sign in</span>}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images && offer.images.slice(0, IMAGES_NUMBER).map((image) => {
                return (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className={`${offer.isFavorite ? `property__bookmark-button property__bookmark-button--active button` : `property__bookmark-button button`}`} type="button" onClick={() => history.push(`/favorites`)}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{offer.isFavorite ? `In bookmarks` : `To bookmarks`}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${createStarsNumber(offer.rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {HousingType[offer.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods && offer.goods.map((good) => {
                    return (
                      <li key={good} className="property__inside-item">
                        {good}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`${offer.host.isPro ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`}`}>
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  {offer.description && offer.description.match(/[^\.!\?]+[\.!\?]+["']?/g).map((sentence) => {
                    return (
                      <p key={sentence} className="property__text">
                        {sentence}
                      </p>
                    );
                  })}
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList id={id} offerId={offer.id} />
                <ReviewsForm id={id} />
              </section>
            </div>
          </div>
          <section className="property__map map"><Map activeCardId={offer.id} offers={totalOffers} /></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList cardName={CardName.NEARPLACES} className={`near-places__list`} offers={nearbyOffers} setActiveCardId={() => {}} />
          </section>
        </div>
      </main>
    </div>
  );
};

PropertyScreen.propTypes = {
  offer: PropTypes.object.isRequired,
  nearbyOffers: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authInfo: PropTypes.object.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //  city: state.city,
  offer: state.offer,
  nearbyOffers: state.nearbyOffers,
  //  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
  authInfo: state.authInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchHotelId(id));
    dispatch(fetchHotelsNearbyHotelId(id));
  },
});

export {PropertyScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyScreen);
