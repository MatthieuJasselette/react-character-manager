import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//import components
import CharEdit from './CharEdit'

export default class CharEditContainer extends Component {
  constructor (props) {
    super (props);
    this.state = {
      characters: []
    }
  }

  getCharacters = () => {
    axios
    .get('https://character-database.becode.xyz/characters/'+this.props.match.params.id)
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
      <CharEdit package={this.state.characters}/>
    );
  }
}
