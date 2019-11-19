import React from 'react';
import './NewsArticle.css';

function NewsArticle(props) {
  return props.articleData.map(article => (
    <article className="news-article">
      <img src={article.img} />
      <h2>{article.headline}</h2>
      <p>{article.description}</p>
      <a href={article.url} />
    </article>
  ));
}

export default NewsArticle;
