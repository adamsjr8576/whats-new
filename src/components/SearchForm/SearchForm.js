import React, { useState } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';

const SearchForm = ({ handleSearch, articleData, loading }) => {
  const [ search, setSearch ] = useState('');

  const changeInput = event => {
    setSearch(event.target.value);
  }

  const clearInput = () => {
    setSearch('');
  }

  const searchHandler = () => {
    const filteredArticles = articleData.filter(article => {
      const articleWords = article.headline.split(' ');
      return articleWords.includes(search);
    });
    clearInput();
    if (filteredArticles.length > 0) {
      handleSearch(filteredArticles);
    }
  }

  return (
    <header>
      <h1>What's <span>New?</span></h1>
      <input
        type="text"
        placeholder="Search for news article here"
        name="search"
        value={search}
        onChange={event => changeInput(event)}
        onKeyDown={event => {
          if (event.key === "Enter") {
            searchHandler();
          }
        }}
        disabled={loading}
      />
      <button className="search-button" disabled={loading} onClick={() => searchHandler()}>Search Now</button>
    </header>
  )
}

SearchForm.propTypes = {
  loading: PropTypes.bool,
  handleSearch: PropTypes.func,
  articleData: PropTypes.array
}

export default SearchForm;
