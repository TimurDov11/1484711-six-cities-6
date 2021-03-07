import React from 'react';
import PropTypes from 'prop-types';

const ArticlePlaceCard = (props) => {
  const {className = ``, onMouseOver = ``} = props;

  return (
    <article className={`${className} place-card`} {...onMouseOver}>
      {props.children}
    </article>
  );
};

ArticlePlaceCard.propTypes = {
  className: PropTypes.string.isRequired,
  onMouseOver: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]).isRequired,
  children: PropTypes.element.isRequired,
};

export default ArticlePlaceCard;
