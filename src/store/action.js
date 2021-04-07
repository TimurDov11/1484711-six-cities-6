export const ActionType = {
  CHANGE_CITY: `changeCity`,
  CHANGE_OPTION: `changeOption`,
  TOGGLE_OPTIONS_POPUP: `toggleOptionsPopup`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_HOTELS: `data/loadHotels`,
  LOAD_HOTEL_ID: `data/loadHotelId`,
  LOAD_COMMENTS_HOTEL_ID: `data/loadCommentsHotelId`,
  LOAD_HOTELS_NEARBY_HOTEL_ID: `data/loadHotelsNearbyHotelId`,
  REDIRECT_TO_ROUTE: `login/redirectToRoute`,
  SET_AUTH_INFO: `data/authInfo`,
  SET_COMMENT_POST: `data/commentPost`,
  TOGGLE_SUBMIT_STATE: `toggleSubmitState`,
  TOGGLE_MISTAKE_STATE: `toggleMistakeState`,
  TOGGLE_HOTEL_FAVORITE_STATE: `toggleHotelFavoriteState`,
  TOGGLE_HOTEL_FAVORITE_STATE__ID: `toggleHotelFavoriteStateId`,
  LOAD_FAVORITE_HOTELS: `data/loadFavoriteHotels`,
  TOGGLE_SERVER_AVAILABILITY: `toggleServerAvailability`,
  TOGGLE_LOGIN_SUBMIT_STATE: `toggleLoginSubmitState`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeOption: (option) => ({
    type: ActionType.CHANGE_OPTION,
    payload: option,
  }),
  toggleOptionsPopup: () => ({
    type: ActionType.TOGGLE_OPTIONS_POPUP,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadHotels: (hotels) => ({
    type: ActionType.LOAD_HOTELS,
    payload: hotels,
  }),
  loadHotelId: (hotel) => ({
    type: ActionType.LOAD_HOTEL_ID,
    payload: hotel,
  }),
  loadCommentsHotelId: (comments) => ({
    type: ActionType.LOAD_COMMENTS_HOTEL_ID,
    payload: comments,
  }),
  loadHotelsNearbyHotelId: (hotels) => ({
    type: ActionType.LOAD_HOTELS_NEARBY_HOTEL_ID,
    payload: hotels,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setAuthInfo: (auth) => ({
    type: ActionType.SET_AUTH_INFO,
    payload: auth,
  }),
  setCommentPost: (comment) => ({
    type: ActionType.SET_COMMENT_POST,
    payload: comment,
  }),
  toggleSubmitState: (boolean) => ({
    type: ActionType.TOGGLE_SUBMIT_STATE,
    payload: boolean,
  }),
  toggleMistakeState: (boolean) => ({
    type: ActionType.TOGGLE_MISTAKE_STATE,
    payload: boolean,
  }),
  toggleHotelFavoriteState: (hotel) => ({
    type: ActionType.TOGGLE_HOTEL_FAVORITE_STATE,
    payload: hotel,
  }),
  toggleHotelFavoriteStateId: (hotel) => ({
    type: ActionType.TOGGLE_HOTEL_FAVORITE_STATE__ID,
    payload: hotel,
  }),
  loadFavoriteHotels: (hotels) => ({
    type: ActionType.LOAD_FAVORITE_HOTELS,
    payload: hotels,
  }),
  toggleServerAvailability: () => ({
    type: ActionType.TOGGLE_SERVER_AVAILABILITY,
  }),
  toggleLoginSubmitState: (boolean) => ({
    type: ActionType.TOGGLE_LOGIN_SUBMIT_STATE,
    payload: boolean,
  }),
};
