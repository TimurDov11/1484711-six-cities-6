import React, {useRef, useState, useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {commentPost} from "../../store/api-actions";
import {ActionCreator} from '../../store/action';
import {MIN_REVIEWS_FORM_TEXT_NUMBER, MAX_REVIEWS_FORM_TEXT_NUMBER} from '../../const';

const ReviewsForm = (props) => {
  const [reviewsFormText, setReviewsFormText] = useState(``);
  const [reviewsFormRating, setReviewsFormRating] = useState(0);
  const textareaRef = useRef();
  const raitingRef = useRef();
  const {isReviewsFormSubmitDisabled, onFormSubmitActivate, id, onSubmit} = props;

  const handleTextareaChange = (evt) => {
    const {value} = evt.target;
    setReviewsFormText(value);
  };

  const handleRatingChange = (evt) => {
    const {value} = evt.target;
    raitingRef.current.checked = true;
    setReviewsFormRating(value);
  };

  useEffect(() => {
    if (reviewsFormText.length >= MIN_REVIEWS_FORM_TEXT_NUMBER && reviewsFormText.length < MAX_REVIEWS_FORM_TEXT_NUMBER && reviewsFormRating !== 0) {
      onFormSubmitActivate(false);
    }

    if (reviewsFormText.length < MIN_REVIEWS_FORM_TEXT_NUMBER || reviewsFormText.length >= MAX_REVIEWS_FORM_TEXT_NUMBER) {
      onFormSubmitActivate(true);
    }
  }, [reviewsFormText, reviewsFormRating]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onFormSubmitActivate(true);
    textareaRef.current.setAttribute(`disabled`, `true`);
    raitingRef.current.setAttribute(`disabled`, `true`);

    onSubmit(id, {
      comment: reviewsFormText,
      rating: reviewsFormRating,
    })
    .then(() => onFormSubmitActivate(false))
    .then(() => {
      textareaRef.current.value = ``;
      setReviewsFormText(``);
      raitingRef.current.checked = false;
      setReviewsFormRating(0);
      textareaRef.current.removeAttribute(`disabled`);
      raitingRef.current.removeAttribute(`disabled`);
    })
    .catch(() => {
      textareaRef.current.removeAttribute(`disabled`);
      raitingRef.current.removeAttribute(`disabled`);
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={handleRatingChange}>
        <input ref={raitingRef} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input ref={raitingRef} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input ref={raitingRef} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input ref={raitingRef} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input ref={raitingRef} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea ref={textareaRef} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleTextareaChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isReviewsFormSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
};

ReviewsForm.propTypes = {
  isReviewsFormSubmitDisabled: PropTypes.bool.isRequired,
  onFormSubmitActivate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isReviewsFormSubmitDisabled: state.isReviewsFormSubmitDisabled,
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmitActivate(boolean) {
    dispatch(ActionCreator.toggleSubmitState(boolean));
  },
  onSubmit(id, commentData) {
    return dispatch(commentPost(id, commentData));
  },
});

export {ReviewsForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
