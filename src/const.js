export const MAX_REVIEWS_NUMBER = 2;

export const NEARBY_OFFERS_NUMBER = 3;

export const CITIES = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`,
};

export const SORTING_OPTIONS = {
  POPULAR: `Popular`,
  PRICE_TO_HIGH: `Price: low to high`,
  PRICE_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

export const HousingType = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

export const CardName = {
  CITIES: `CITIES`,
  NEARPLACES: `NEARPLACES`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
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

export const sortPriceToHigh = (offerA, offerB) => {
  if (offerA.price < offerB.price) {
    return -1;
  }
  if (offerA.price > offerB.price) {
    return 1;
  }

  return 0;
};

export const sortPriceToLow = (offerA, offerB) => {
  if (offerA.price > offerB.price) {
    return -1;
  }
  if (offerA.price < offerB.price) {
    return 1;
  }

  return 0;
};

export const sortTopRatedFirst = (offerA, offerB) => {
  if (offerA.rating > offerB.rating) {
    return -1;
  }
  if (offerA.rating < offerB.rating) {
    return 1;
  }

  return 0;
};

export const sortCards = (sortingOption, offers) => {
  const sortOffers = offers.slice();

  switch (sortingOption) {
    case SORTING_OPTIONS.POPULAR:
      return offers;

    case SORTING_OPTIONS.PRICE_TO_HIGH:
      return sortOffers.sort(sortPriceToHigh);

    case SORTING_OPTIONS.PRICE_TO_LOW:
      return sortOffers.sort(sortPriceToLow);

    case SORTING_OPTIONS.TOP_RATED_FIRST:
      return sortOffers.sort(sortTopRatedFirst);

    default:
      return offers;
  }
};

export const adaptToClient = (data) => {
  const adaptedData = {
    ...data,
    previewPhoto: data.preview_image,
    isPremium: data.is_premium,
    isFavorite: data.is_favorite,
  };

  delete adaptedData.preview_image;
  delete adaptedData.is_premium;
  delete adaptedData.is_favorite;

  return adaptedData;
};
