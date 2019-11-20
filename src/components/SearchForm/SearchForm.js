import React, {Component} from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  changeInput = event => {
    this.setState({search: event.target.value})
  }

  clearInput = () => {
    this.setState({search: ''});
  }

  searchHandler = () => {
    const { search } = this.state;
    const { articleData, handleSearch } = this.props;

    const filteredArticles = articleData.filter(article => {
      const articleWords = article.headline.split(' ');
      return articleWords.includes(search);
    });
    if (filteredArticles.length > 0) {
      handleSearch(filteredArticles);
    }
    this.clearInput();
  }

  render() {
    const { search } = this.state;
    const { loading } = this.props;

    return (
      <header>
        <h1>What's <span>New?</span></h1>
        <input
          type="text"
          placeholder="Search for news article here"
          name="search"
          value={search}
          onChange={event => this.changeInput(event)}
          onKeyDown={(e) => {
            if (e.key ==="Enter") {
              this.searchHandler();
            }
          }}
          disabled={loading}
        />
        <button className="search-button" disabled={loading} onClick={() => this.searchHandler()}>Search Now</button>
      </header>
    );
  }
}

export default SearchForm;
