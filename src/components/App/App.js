import React, { Component } from 'react';
import './App.css';
import NewsContainer from "../NewsContainer/NewsContainer";
import Menu from "../Menu/Menu";
import SearchForm from "../SearchForm/SearchForm";


class App extends Component {
  constructor() {
    super();

    this.state = {
      newsArticle: 'local',
      allData: null,
      selectedData: null,
      loading: true,
    }
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(response => response.json())
    .then(data => {
      this.setState({ allData: data, selectedData: data[this.state.newsArticle], loading: false });
    });
  }

  changeTopic = (topic) => {
    this.setState({ newsArticle: topic, selectedData: this.state.allData[topic] });
  }

  handleSearch = (filteredArticle) => {
    this.setState({ selectedData: filteredArticle })
  }

  render () {
    const { allData, newsArticle, loading, selectedData } = this.state;

    return (
      <div className="app">
        <SearchForm
        handleSearch={ this.handleSearch }
        articleData={ allData && allData[newsArticle] }
        loading={ loading }/>
        <Menu
        changeTopic={ this.changeTopic }
        loading={ loading }/>
        <NewsContainer articleData={ selectedData } />
      </div>
    );
  }
}

export default App;
