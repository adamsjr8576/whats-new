import React, { useState, useEffect } from 'react';
import './App.css';
import NewsContainer from "../NewsContainer/NewsContainer";
import Menu from "../Menu/Menu";
import SearchForm from "../SearchForm/SearchForm";


const App = () => {
  const [ newsArticle, setNewsArticle ] = useState('local')
  const [ allData, setAllData ] = useState(null)
  const [ selectedData, setSelectedData ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  const changeTopic = (topic) => {
    setNewsArticle(topic);
    setSelectedData(allData[topic]);
  }

  const handleSearch = (filteredArticle) => {
    setSelectedData(filteredArticle)
  }

  useEffect(() => {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(response => response.json())
    .then(data => {
      setAllData(data);
      setSelectedData(data[newsArticle]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="app">
      <SearchForm
      handleSearch={ handleSearch }
      articleData={ allData && allData[newsArticle] }
      loading={ loading }/>
      <Menu
      changeTopic={ changeTopic }
      loading={ loading }/>
      <NewsContainer articleData={ selectedData } />
    </div>
  );

}

export default App;
