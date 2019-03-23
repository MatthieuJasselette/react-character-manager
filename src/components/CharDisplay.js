import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';

export default class CharDisplay extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}>Get me back to the list.</Link>
        <Link to={"/char-create-container-"}>Create a character</Link>
        <div>
          <p>This is the CharDisplay page</p>
          <h5>{this.props.package.name}</h5>
          <img src={"data:image;base64,"+this.props.package.image} />
          <p>{this.props.package.shortDescription}</p>
          <ReactMarkdown source={this.props.package.description} />
        </div>
        <Link to={"/char-edit-container-"+this.props.package.id}>Edit this fool !</Link>
      </div>
    );
  }
}
