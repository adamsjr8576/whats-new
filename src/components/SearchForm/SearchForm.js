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
  let filteredArticles = this.props.articleData.filter(article => {
    let articleWords = article.headline.split(' ');
    return articleWords.includes(this.state.search);
  });
  if (filteredArticles.length > 0) {
    this.props.changeTopic(filteredArticles);
  }
  this.clearInput();
}

  render() {
    return (
      <header>
        <h1>What's <span>New?</span></h1>
        <input
          type="text"
          placeholder="Search for news article here"
          name="search"
          value={this.state.search}
          onChange={event => this.changeInput(event)}
          onKeyDown={(e) => {
            if (e.key ==="Enter") {
              this.searchHandler();
            }
          }}
        />
        <button className="search-button" onClick={() => this.searchHandler()}>Search Now</button>
      </header>
    );
  }
}

export default SearchForm;
