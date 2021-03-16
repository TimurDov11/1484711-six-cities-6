export const ActionType = {
  CHANGE_CITY: `changeCity`,
  CHANGE_OPTION: `changeOption`,
  FILL_OFFERS: `fillOffers`,
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const changeOption = (option) => ({
  type: ActionType.CHANGE_OPTION,
  payload: option,
});
