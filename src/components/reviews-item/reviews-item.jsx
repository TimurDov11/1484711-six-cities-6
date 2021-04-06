import React from 'react';
import {getDateTime, getDate, createStarsNumber} from '../../utils';
import reviewsItemProp from './reviews-item.prop';

const ReviewsItem = (props) => {
  const {review} = props;
  const {comment, date, rating, user} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.src} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${createStarsNumber(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={`${getDateTime(date)}`}>{`${getDate(date)}`}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: reviewsItemProp,
};

export default ReviewsItem;
