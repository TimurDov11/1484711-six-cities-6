import {ActionType} from './action';
import {City, SortingOption, AuthorizationStatus} from '../const';
import {updateData} from '../utils';

const initialState = {
  city: City.PARIS,
  offers: [],
  favoriteOffers: [],
  offer: {},
  reviews: [],
  nearbyOffers: [],
  option: SortingOption.POPULAR,
  isOptionsOpened: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  isFavoriteOffersLoaded: false,
  authInfo: {},
  commentPost: {},
  isReviewsFormSubmitDisabled: true,
  isReviewsFormHasMistake: false,
  isServerAvailable: true,
  isLoginFormSubmitDisabled: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        option: SortingOption.POPULAR,
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
        nearbyOffers: updateData(state.nearbyOffers, action.payload),
        isFavoriteOffersLoaded: false
      };

    case ActionType.TOGGLE_HOTEL_FAVORITE_STATE__ID:
      return {
        ...state,
        offer: action.payload,
        isFavoriteOffersLoaded: false
      };

    case ActionType.LOAD_FAVORITE_HOTELS:
      return {
        ...state,
        favoriteOffers: action.payload,
        isFavoriteOffersLoaded: true
      };

    case ActionType.TOGGLE_SERVER_AVAILABILITY:
      return {
        ...state,
        isServerAvailable: false
      };

    case ActionType.TOGGLE_LOGIN_SUBMIT_STATE:
      return {
        ...state,
        isLoginFormSubmitDisabled: action.payload
      };

    default:
      return state;
  }
};

export {reducer};
