export const ActionType = {
  CHANGE_CITY: `changeCity`,
  CHANGE_OPTION: `changeOption`,
  TOGGLE_OPTIONS_POPUP: `toggleOptionsPopup`,
  FILL_OFFERS: `fillOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_HOTELS: `data/loadHotels`,
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
  })
};
