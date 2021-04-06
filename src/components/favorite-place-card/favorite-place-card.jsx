import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {HousingType} from '../../const';
import {createStarsNumber} from '../../utils';
import {favoriteHotelPost} from "../../store/api-actions";
import favoritePlaceCardProp from './favorite-place-card.prop';
import PropTypes from 'prop-types';

const FavoritePlaceCard = (props) => {
  const {cityFavoriteOffer, onFavoriteHotelClick} = props;
  const {id, previewPhoto, price, isFavorite, rating, title, type} = cityFavoriteOffer;

  const handleFavoriteHotelClick = (evt) => {
    evt.preventDefault();

    onFavoriteHotelClick(id, isFavorite ? 0 : 1);
  };

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewPhoto} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={handleFavoriteHotelClick}>
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
          <Link to={`offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{HousingType[type]}</p>
      </div>
    </article>
  );
};

FavoritePlaceCard.propTypes = {
  cityFavoriteOffer: favoritePlaceCardProp,
  onFavoriteHotelClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFavoriteHotelClick(id, status) {
    dispatch(favoriteHotelPost(id, status));
  },
});

export {FavoritePlaceCard};
export default connect(null, mapDispatchToProps)(FavoritePlaceCard);
