import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {favoriteHotelPost} from "../../store/api-actions";
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {HousingType, CardName} from '../../const';
import {createStarsNumber} from '../../utils';
import placeCardProp from './place-card.prop';

const PlaceCard = (props) => {
  const {cardName, offer, setActiveCardId, onFavoriteHotelClick, onPlaceCardBookmarkButtonClick} = props;
  const {id, isPremium, previewPhoto, price, isFavorite, rating, title, type} = offer;

  const CardSettings = {
    [CardName.CITIES]: {
      cardClass: `cities__place-card`,
      cardInfoClass: `cities__image-wrapper`,
    },
    [CardName.NEARPLACES]: {
      cardClass: `near-places__card`,
      cardInfoClass: `near-places__image-wrapper`,
    },
  };

  const handleFavoriteHotelClick = (evt) => {
    evt.preventDefault();

    onFavoriteHotelClick(id, isFavorite ? 0 : 1)
    .then((data) => onPlaceCardBookmarkButtonClick(data));
  };

  return (
    <article className={`${CardSettings[cardName].cardClass} place-card`}
      onMouseOver={() => {
        setActiveCardId(id);
      }}

      onMouseOut={() => {
        setActiveCardId(``);
      }}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ``
      }
      <div className={`${CardSettings[cardName].cardInfoClass} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewPhoto} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${isFavorite ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`}`} type="button" onClick={handleFavoriteHotelClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${createStarsNumber(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{HousingType[type]}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  offer: placeCardProp,
  setActiveCardId: PropTypes.func.isRequired,
  onFavoriteHotelClick: PropTypes.func.isRequired,
  onPlaceCardBookmarkButtonClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFavoriteHotelClick(id, status) {
    return dispatch(favoriteHotelPost(id, status));
  },
  onPlaceCardBookmarkButtonClick(data) {
    dispatch(ActionCreator.toggleHotelFavoriteState(data));
  },
});

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
