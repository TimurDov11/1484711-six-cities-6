export const MAX_REVIEWS_NUMBER = 2;

export const HousingType = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

export const createStarsNumber = (rating) => {
  return Math.round(rating) * 100 / 5;
};

export const sortReviewsDate = (ReviewA, ReviewB) => {
  const previousReview = new Date(ReviewA.date);
  const lastReview = new Date(ReviewB.date);

  return lastReview - previousReview;
};

export const getDateTime = (date) => {
  let day = new Date(date).getUTCDate();

  let month = new Date(date).getUTCMonth() + 1;
  const year = new Date(date).getFullYear();

  if (day < 10) {
    day = `0${day}`;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  return `${year}-${month}-${day}`;
};

export const getDate = (date) => {
  const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
  const monthIndex = new Date(date).getUTCMonth();
  const month = MONTHS[monthIndex];
  const year = new Date(date).getFullYear();

  return `${month} ${year}`;
};
