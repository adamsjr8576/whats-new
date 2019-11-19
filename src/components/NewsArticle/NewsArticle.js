import React from 'react';
import './NewsArticle.css';

function NewsArticle(props) {
  return props.articleData.map(article => (
    <article className="news-article">
      <img src={article.img} />
      <h2>{article.headline}</h2>
      <p>{article.description}</p>
      <section className="link">
      <a href={article.url}>Link To Article</a>
      </section>
    </article>
  ));
}

export default NewsArticle;
