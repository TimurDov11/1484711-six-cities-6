import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {HousingType, CardName, createStarsNumber} from '../../const';
import placeCardProp from './place-card.prop';

const PlaceCard = (props) => {
  const [, setActiveCardId] = useState(``);
  const {cardName, offer} = props;
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

  const history = useHistory();

  return (
    <article className={`${CardSettings[cardName].cardClass} place-card`}
      onMouseOver={() => {
        setActiveCardId(id);
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
          <button className={`${isFavorite ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`}`} type="button" onClick={() => history.push(`/login`)}>
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

PlaceCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  offer: placeCardProp,
};

export default PlaceCard;
