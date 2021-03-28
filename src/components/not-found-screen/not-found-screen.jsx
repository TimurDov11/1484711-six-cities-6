import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundScreen = () => {
  return (
    <div className="page">
      <section className="page__main">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </div>
  );
};

export default NotFoundScreen;
