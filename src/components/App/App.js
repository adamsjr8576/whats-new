import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from "../NewsContainer/NewsContainer";
import Menu from "../Menu/Menu";


class App extends Component {
  constructor() {
    super();
    this.state = {
      newsArticle: local
    }
  }

  changeTopic = (topic) => {
    this.setState({newsArticle: topic});
  }

  render () {
    return (
      <div className="app">
        <header>
          <h1>What's <span>New?</span></h1>
          <input type="text" placeholder="Search for news article here" />
          <button className="search-button">Search Now</button>
        </header>
        <Menu changeTopic={this.changeTopic}/>
        <NewsContainer articleData={this.state.newsArticle} />
      </div>
    );
  }
}

export default App;
