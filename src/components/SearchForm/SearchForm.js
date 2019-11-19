import React, {Component} from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <header>
        <h1>What's <span>New?</span></h1>
        <input type="text" placeholder="Search for news article here" />
        <button className="search-button">Search Now</button>
      </header>
    );
  }
}

export default SearchForm;
