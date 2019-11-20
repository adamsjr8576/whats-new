import React from 'react';
import './NewsContainer.css';
import NewsArticle from "../NewsArticle/NewsArticle";

const NewsContainer = ({articleData}) => {
  const articleCards = articleData && articleData.map(article => {
    return (<NewsArticle
      key = {article.id}
      id = {article.id}
      headline = {article.headline}
      img = {article.img}
      description = {article.description}
      url = {article.url}
      />
    )
  });

  return (
    <main className="news-container">
      {articleCards || null}
    </main>
  );
}

export default NewsContainer;
