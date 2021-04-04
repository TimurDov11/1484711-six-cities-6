import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ReviewsItem from '../reviews-item/reviews-item';
import {MAX_REVIEWS_NUMBER, sortReviewsDate} from '../../const';
import {fetchCommentsHotelId} from "../../store/api-actions";

const ReviewsList = (props) => {
  const {id, offerId, onLoadData, reviews} = props;

  const sortedDateReviews = reviews.sort(sortReviewsDate);
  const shownReviews = sortedDateReviews.slice(0, MAX_REVIEWS_NUMBER);
  const shownReviewsNumber = shownReviews.length;

  useEffect(() => {
    if (reviews.length === 0) {
      onLoadData(id);
    }
  }, []);

  useEffect(() => {
    if (id !== offerId && reviews.length !== 0) {
      onLoadData(id);
    }
  }, [id]);


  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{shownReviewsNumber}</span></h2>
      <ul className="reviews__list">
        {shownReviews && shownReviews.map((review) => <ReviewsItem key={review.id} review={review} />)}
      </ul>
    </>
  );
};

ReviewsList.propTypes = {
  id: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired,
  onLoadData: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchCommentsHotelId(id));
  },
});

export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
