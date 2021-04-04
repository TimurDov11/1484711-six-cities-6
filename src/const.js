export const MAX_REVIEWS_NUMBER = 10;

export const IMAGES_NUMBER = 6;

export const MIN_REVIEWS_FORM_TEXT_NUMBER = 50;

export const MAX_REVIEWS_FORM_TEXT_NUMBER = 300;

export const RATING_TITLES = [`terribly`, `badly`, `not bad`, `good`, `perfect`];

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

export const AppRoute = {
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  OFFER_ID: `/offer/:id`,
  ROOT: `/`,
};

export const APIRoute = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
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
    maxAdults: data.max_adults,
    host: {
      avatarUrl: data.host.avatar_url,
      id: data.host.id,
      isPro: data.host.is_pro,
      name: data.host.name,
    },
  };

  delete adaptedData.preview_image;
  delete adaptedData.is_premium;
  delete adaptedData.is_favorite;
  delete adaptedData.max_adults;

  return adaptedData;
};

export const adaptCommentsToClient = (data) => {
  const adaptedData = {
    ...data,
    user: {
      src: data.user.avatar_url,
      id: data.user.id,
      isPro: data.user.is_pro,
      name: data.user.name,
    },
  };

  return adaptedData;
};
