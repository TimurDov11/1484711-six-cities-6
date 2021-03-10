import {ActionType} from './action';
import {CITIES} from '../const';
import offers from '../mocks/offers';

const initialState = {
  city: CITIES.PARIS,
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };

    case ActionType.FILL_OFFERS:
      return {
        ...state,
        offers: action.payload
      };

    default:
      return state;
  }
};


export {reducer};
