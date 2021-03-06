import React from 'react';
import './NewsArticle.css';
import arrow from '../../images/arrow.png';
import PropTypes from 'prop-types';

const NewsArticle = ({headline, img, description, url}) => {
  return (
    <article className="news-article">
      <img className="article-img" src={img} alt="article"/>
      <h2 className="article-text">{headline}</h2>
      <p className="article-text">{description}</p>
      <section className="link">
      <a href={url} className="article-link">Link To Article</a>
      <a href={url} className="article-link"><img src={arrow} alt="arrow icon" className="arrow-link"/></a>
      </section>
    </article>
  );
}

NewsArticle.propTypes = {
  id: PropTypes.number,
  headline: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
}

export default NewsArticle;
