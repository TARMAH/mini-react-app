import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {

  constructor(){
  super();

  this.state = {
     monsters : [],
     searchField :''
  };

  }

  componentDidMount(){

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then((users) => {
        this.setState(
          {monsters:users}
        )
      });

  }

  handleChange = e => { this.setState({searchField:e.target.value}) };

  render() {

    const { monsters , searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">

        <h1> Monsters Rolodex </h1>

        <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}
        />

        <CardList monsters= {filteredMonsters}>
        </CardList>

      </div>
    );
  }
}

export default App;
