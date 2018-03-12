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
    this.searchGiphy("dog");
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

  fromGif = (text) => {
    var myState = JSON.parse(JSON.stringify(this.state.results));
    myState.forEach(function(value,i){
      if(text === value.title){
        myState[i].images.original.url = myState[i].images.original_still.url;
      }
      
    })
    this.setState({
      results:myState
    })
  

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
                stopTheGif={this.fromGif}
            />  
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
