export const ActionType = {
  CHANGE_CITY: `changeCity`,
  FILL_OFFERS: `fillOffers`,
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});
