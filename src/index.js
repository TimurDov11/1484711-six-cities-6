import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

/*const Setting = {
  ERRORS_COUNT: 3
};*/

/*const albums = [
  {title: `Runaway`, year: 1983},
  {title: `Crush`, year: 2001},
  {title: `Slippery when wet`, year: 1988}
];*/


ReactDOM.render(
    <App
      //errorsCount={Setting.ERRORS_COUNT}
    />,
    document.querySelector(`#root`)
);
