import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from "../NewsContainer/NewsContainer";
import Menu from "../Menu/Menu";
import SearchForm from "../SearchForm/SearchForm";


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
        <SearchForm
        changeTopic={this.changeTopic}
        articleData={this.state.newsArticle}/>
        <Menu changeTopic={this.changeTopic}/>
        <NewsContainer articleData={this.state.newsArticle} />
      </div>
    );
  }
}

export default App;
