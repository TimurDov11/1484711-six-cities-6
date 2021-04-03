import React, {useRef, useState, useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {commentPost} from "../../store/api-actions";
import {ActionCreator} from '../../store/action';
import {RATING_TITLES, MIN_REVIEWS_FORM_TEXT_NUMBER, MAX_REVIEWS_FORM_TEXT_NUMBER} from '../../const';

const ReviewsForm = (props) => {
  const [reviewsFormText, setReviewsFormText] = useState(``);
  const [reviewsFormRating, setReviewsFormRating] = useState(0);
  const [starsDisabledAttribute, toggleStarsDisabledAttribute] = useState(false);
  const textareaRef = useRef();
  const {isReviewsFormSubmitDisabled, isReviewsFormHasMistake, onFormSubmitActivate, id, onSubmit, onMistake} = props;

  const handleTextareaChange = (evt) => {
    const {value} = evt.target;
    setReviewsFormText(value);
  };

  const handleRatingChange = (evt) => {
    const {value} = evt.target;
    setReviewsFormRating(value);
  };

  useEffect(() => {
    if (reviewsFormText.length >= MIN_REVIEWS_FORM_TEXT_NUMBER && reviewsFormText.length < MAX_REVIEWS_FORM_TEXT_NUMBER && reviewsFormRating !== 0) {
      onFormSubmitActivate(false);
    }

    if (reviewsFormText.length < MIN_REVIEWS_FORM_TEXT_NUMBER || reviewsFormText.length >= MAX_REVIEWS_FORM_TEXT_NUMBER) {
      onFormSubmitActivate(true);
    }

    if (isReviewsFormHasMistake) {
      onMistake(false);
    }
  }, [reviewsFormText, reviewsFormRating]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onFormSubmitActivate(true);
    textareaRef.current.setAttribute(`disabled`, `true`);
    toggleStarsDisabledAttribute(true);

    onSubmit(id, {
      comment: reviewsFormText,
      rating: reviewsFormRating,
    })
    .then(() => onFormSubmitActivate(false))
    .then(() => {
      textareaRef.current.value = ``;
      setReviewsFormText(``);
      setReviewsFormRating(0);
      textareaRef.current.removeAttribute(`disabled`);
      toggleStarsDisabledAttribute(false);
    })
    .catch(() => {
      textareaRef.current.removeAttribute(`disabled`);
      toggleStarsDisabledAttribute(false);
      onMistake(true);
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((title, value) => (
          <React.Fragment key={value}>
            <input className="form__rating-input visually-hidden" name="rating" value={value + 1} id={`${value + 1}-stars`} type="radio" onChange={handleRatingChange} checked={Number(reviewsFormRating) === value + 1} disabled={starsDisabledAttribute} />
            <label htmlFor={`${value + 1}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        )).reverse()}
      </div>
      <textarea ref={textareaRef} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleTextareaChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          {isReviewsFormHasMistake && <b className="reviews__text-amount">MISTAKE! TRY AGAIN!</b>} To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
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
  isReviewsFormHasMistake: PropTypes.bool.isRequired,
  onMistake: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isReviewsFormSubmitDisabled: state.isReviewsFormSubmitDisabled,
  isReviewsFormHasMistake: state.isReviewsFormHasMistake,
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmitActivate(boolean) {
    dispatch(ActionCreator.toggleSubmitState(boolean));
  },
  onSubmit(id, commentData) {
    return dispatch(commentPost(id, commentData));
  },
  onMistake(boolean) {
    dispatch(ActionCreator.toggleMistakeState(boolean));
  },
});

export {ReviewsForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
