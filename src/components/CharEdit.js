import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';

export default class CharEdit extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}>Get me back to the list.</Link>
        <Link to={"/char-create-container-"}>Create a character</Link>
        <div>
          <p>This is the CharEdit page</p>
          <input type="text>" defaultValue={this.props.package.name}></input>
          <img src={"data:image;base64,"+this.props.package.image} />
          <input type="text" defaultValue={this.props.package.shortDescription}></input>
          {this.props.package.description}
        </div>
      </div>
    );
  }
}
