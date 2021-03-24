import {ActionType} from './action';
import {CITIES, SORTING_OPTIONS, AuthorizationStatus} from '../const';

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

    default:
      return state;
  }
};


export {reducer};
