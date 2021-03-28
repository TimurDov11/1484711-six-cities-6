export const ActionType = {
  CHANGE_CITY: `changeCity`,
  CHANGE_OPTION: `changeOption`,
  TOGGLE_OPTIONS_POPUP: `toggleOptionsPopup`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_HOTELS: `data/loadHotels`,
  REDIRECT_TO_ROUTE: `login/redirectToRoute`,
  GET_AUTH_INFO: `data/authInfo`,
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
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  getAuthInfo: (auth) => ({
    type: ActionType.GET_AUTH_INFO,
    payload: auth,
  })
};
