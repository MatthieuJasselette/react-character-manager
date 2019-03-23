import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import CharCreate from './CharCreate'

export default class CharCreateContainer extends Component {
  constructor (props) {
    super (props);
    this.state = {
      characters: []
    }
  }

  addCharacters = () => {

  }




  render() {
    return (
      <CharCreate />
    );
  }
}
