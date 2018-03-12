import React, { Component } from 'react';
import Header from './components/Header';
import Gifs from './components/Gifs';
import SearchBar from './components/SearchBar';
import API from './utils/API';
import './App.css'

class App extends Component {
  state = {
    results: []
  };

  componentDidMount(){
    this.searchGiphy("turtle");
  }

  searchGiphy(query){
    API.search(query)
      .then(res => {
        this.setState({
          results: res.data.data
        })
        console.log(this.state.results[0]);
      })
      .catch(err => console.log(err));
  }

  fromSearchBar = (dataFromSearch) => {
    this.searchGiphy(dataFromSearch);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar sendFromApp={this.fromSearchBar} />
        <div className="flex">
          {this.state.results.map((data, index) => {
            return(
              <Gifs
                key={index}
                image={data.images.original.url}
                title={data.title}
                link={data.url}
            />  
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
