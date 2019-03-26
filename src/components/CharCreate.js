import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


import ConfirmModalContainer from'./ConfirmModalContainer.js';

export default class CharCreate extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}><Button>Get me back to the list.</Button></Link>
        <Form>
          <Form.Group controlId="createForm.ControlInput1">
            <Form.Label>Name of the character:</Form.Label>
            <Form.Control type="text" onChange={this.props.onChangeName}/>
          </Form.Group>
          <Form.Group controlId="createForm.ControlInput2">
            <Form.Label>Write a short description:</Form.Label>
            <Form.Control type="text" onChange={this.props.onChangeShortDescription}/>
          </Form.Group>
          <Form.Group controlId="createForm.ControlTextarea1">
            <Form.Label>Write an extensive description:</Form.Label>
            <Form.Control as="textarea" rows="8" onChange={this.props.onChangeDescription}/>
          </Form.Group>
          <Form.Group controlId="createForm.ControlInput4">
            <Form.Label>Pick a picture of the character:</Form.Label>
            <Form.Control className="browse-input" type="file" onChange={this.props.onChangeImage}/>
          </Form.Group>
        </Form>
        <ConfirmModalContainer
        message="Do you want to add this character ?"
        variant="primary"
        label="Submit changes"
        onClick={this.props.onSubmit}
        />
      </div>
    );
  }
}
