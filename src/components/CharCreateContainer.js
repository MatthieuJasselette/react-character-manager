import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

import CharCreate from './CharCreate'

export default class CharCreateContainer extends Component {
  constructor (props) {
    super (props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeShortDescription = this.onChangeShortDescription.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      characters: [],
      charName: "",
      charDesc: "",
      charShortDesc: "",
      charImage: ""
    }
  }

  onChangeName(e) {
    this.setState({
      charName: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      charDesc: e.target.value
    });
  }

  onChangeShortDescription(e) {
    this.setState({
      charShortDesc: e.target.value
    });
  }

  onChangeImage(e) {
    this.setState({
      charImage: e.target.value
    });
  }

  onSubmit(data) {
    data.preventDefault();
    const obj = {
      name: this.state.charName,
      description: this.state.charDesc,
      shortDescription: this.state.charShortDesc,
      image: this.state.charImage
    };
    axios
      .post("https://character-database.becode.xyz/characters/", obj)
      .then(this.props.history.push('/'))
      .catch(err => console.log(err))
  }



  render() {
    return (
      <CharCreate
        onSubmit={this.onSubmit}
        onChangeImage={this.onChangeImage}
        onChangeShortDescription={this.onChangeShortDescription}
        onChangeDescription={this.onChangeDescription}
        onChangeName={this.onChangeName}/>
    );
  }
}
