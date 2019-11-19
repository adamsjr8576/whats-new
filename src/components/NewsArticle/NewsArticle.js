import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({headline, img, description, url}) => {
  return (
    <article className="news-article">
      <img src={img} />
      <h2>{headline}</h2>
      <p>{description}</p>
      <section className="link">
      <a href={url}>Link To Article</a>
      </section>
    </article>
  );
}

export default NewsArticle;
