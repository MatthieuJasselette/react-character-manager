import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

//import components
import CharDisplay from './CharDisplay'

export default class CharDisplayContainer extends Component {
  constructor (props) {
    super (props);
    this.state = {
      character: []
    }
  }

  getCharacter = () => {
    axios
    .get('https://character-database.becode.xyz/characters/'+this.props.match.params.id)
    .then(result => this.setState({
      character: result.data
    }))
    .catch(err => console.log(err))
  }

  deleteCharacter = () => {
    axios
    .delete('https://character-database.becode.xyz/characters/'+this.props.match.params.id)
    .then(this.getCharacter())
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getCharacter()
  }

  componentDidUpdate() {
    this.getCharacter()
  }


  render() {
    return (
      <CharDisplay package={this.state.character}/>
    );
  }
}
