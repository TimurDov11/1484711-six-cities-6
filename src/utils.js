import {SortingOption} from './const';

export const createStarsNumber = (rating) => {
  return Math.round(rating) * 100 / 5;
};

export const sortReviewsDate = (reviewA, reviewB) => {
  const previousReview = new Date(reviewA.date);
  const lastReview = new Date(reviewB.date);

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

const sortPriceToHigh = (offerA, offerB) => {
  if (offerA.price < offerB.price) {
    return -1;
  }
  if (offerA.price > offerB.price) {
    return 1;
  }

  return 0;
};

const sortPriceToLow = (offerA, offerB) => {
  if (offerA.price > offerB.price) {
    return -1;
  }
  if (offerA.price < offerB.price) {
    return 1;
  }

  return 0;
};

const sortTopRatedFirst = (offerA, offerB) => {
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
    case SortingOption.POPULAR:
      return offers;

    case SortingOption.PRICE_TO_HIGH:
      return sortOffers.sort(sortPriceToHigh);

    case SortingOption.PRICE_TO_LOW:
      return sortOffers.sort(sortPriceToLow);

    case SortingOption.TOP_RATED_FIRST:
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
    type: data.type.toUpperCase(),
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

export const updateData = (data, updatedData) => {
  const DELETE_COUNT = 1;
  const newData = data.slice();
  const index = newData.findIndex((everyData) => everyData.id === updatedData.id);

  if (index < 0) {
    return newData;
  }

  newData.splice(index, DELETE_COUNT, updatedData);

  return newData;
};
