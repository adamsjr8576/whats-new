import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from "../NewsContainer/NewsContainer"

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        <header>
          <h1>What's <span>New?</span></h1>
          <input type="text" placeholder="Search for news article here" />
          <button className="search-button">Search Now</button>
        </header>
        <nav>
          <button>local news</button>
          <button>local news</button>
          <button>local news</button>
          <button>local news</button>
          <button>local news</button>
        </nav>
        <NewsContainer articleData={local} />
      </div>
    );
  }
}

export default App;
