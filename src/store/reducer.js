import {ActionType} from './action';
import {CITIES, SORTING_OPTIONS, sortCards} from '../const';
import offers from '../mocks/offers';

const initialState = {
  city: CITIES.PARIS,
  offers,
  option: SORTING_OPTIONS.POPULAR,
  isOptionsOpened: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        option: SORTING_OPTIONS.POPULAR,
        offers
      };

    case ActionType.CHANGE_OPTION:
      return {
        ...state,
        option: action.payload,
        offers: sortCards(action.payload, offers),
      };

    case ActionType.TOGGLE_OPTIONS_POPUP:
      return {
        ...state,
        isOptionsOpened: !state.isOptionsOpened
      };

    case ActionType.FILL_OFFERS:
      return {
        ...state,
        offers: offers.filter((offer) => offer.city.name === action.payload)
      };

    default:
      return state;
  }
};


export {reducer};
