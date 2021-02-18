export const HousingType = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

export const createStarsNumber = (rating) => {
  return Math.round(rating) * 100 / 5;
};
