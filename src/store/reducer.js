import {ActionType} from './action';
import {CITIES, SORTING_OPTIONS, sortCards, AuthorizationStatus} from '../const';

const initialState = {
  city: CITIES.PARIS,
  offers: [],
  option: SORTING_OPTIONS.POPULAR,
  isOptionsOpened: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        option: SORTING_OPTIONS.POPULAR,
        //  offers
      };

    case ActionType.CHANGE_OPTION:
      //  const offers = state.offers.slice();

      return {
        ...state,
        option: action.payload,
        offers: sortCards(action.payload, state.offers),
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

    default:
      return state;
  }
};


export {reducer};
