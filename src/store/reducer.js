import {ActionType} from './action';
import {CITIES, SORTING_OPTIONS, AuthorizationStatus, updateData} from '../const';

const initialState = {
  city: CITIES.PARIS,
  offers: [],
  favoriteOffers: [],
  offer: {},
  reviews: [],
  nearbyOffers: [],
  option: SORTING_OPTIONS.POPULAR,
  isOptionsOpened: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  isFavoriteOffersLoaded: false,
  authInfo: {},
  commentPost: {},
  isReviewsFormSubmitDisabled: true,
  isReviewsFormHasMistake: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        option: SORTING_OPTIONS.POPULAR,
      };

    case ActionType.CHANGE_OPTION:
      return {
        ...state,
        option: action.payload,
      };

    case ActionType.TOGGLE_OPTIONS_POPUP:
      return {
        ...state,
        isOptionsOpened: !state.isOptionsOpened
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };

    case ActionType.LOAD_HOTEL_ID:
      return {
        ...state,
        offer: action.payload,
      };

    case ActionType.LOAD_COMMENTS_HOTEL_ID:
      return {
        ...state,
        reviews: action.payload,
      };

    case ActionType.LOAD_HOTELS_NEARBY_HOTEL_ID:
      return {
        ...state,
        nearbyOffers: action.payload,
      };

    case ActionType.SET_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload
      };

    case ActionType.SET_COMMENT_POST:
      return {
        ...state,
        commentPost: action.payload
      };

    case ActionType.TOGGLE_SUBMIT_STATE:
      return {
        ...state,
        isReviewsFormSubmitDisabled: action.payload
      };

    case ActionType.TOGGLE_MISTAKE_STATE:
      return {
        ...state,
        isReviewsFormHasMistake: action.payload
      };

    case ActionType.TOGGLE_HOTEL_FAVORITE_STATE:
      return {
        ...state,
        offers: updateData(state.offers, action.payload),
        offer: action.payload,
        isFavoriteOffersLoaded: false,
      };

    case ActionType.LOAD_FAVORITE_HOTELS:
      return {
        ...state,
        favoriteOffers: action.payload,
        isFavoriteOffersLoaded: true
      };

    default:
      return state;
  }
};

export {reducer};
