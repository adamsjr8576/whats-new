import React from 'react';
import './NewsContainer.css';
import NewsArticle from "../NewsArticle/NewsArticle";

function NewsContainer(props) {
  return (
    <main className="news-container">
      <NewsArticle articleData={props.articleData} />
    </main>
  )
}

// NEWSCONTAINER COMPONENT CODE GOES HERE

export default NewsContainer;
