import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

//import components
import CharList from './CharList.js';

export default class CharListContainer extends Component {
  constructor (props) {
    super (props);
    this.state = {
      characters: []
    }
  }

  getCharacters = () => {
    axios
    .get('https://character-database.becode.xyz/characters')
    .then(result => this.setState({
      characters: result.data
    }))
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getCharacters()
  }

  componentDidUpdate() {
    this.getCharacters()
  }

  render() {
    return (
      <CharList  package={this.state.characters}/>
    );
  }
}
