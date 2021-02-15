import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const Setting = {
  OFFERS_COUNT: 5
};

ReactDOM.render(
    <App
      offersCount={Setting.OFFERS_COUNT}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
