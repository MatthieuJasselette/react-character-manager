import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ConfirmModal from './ConfirmModal';

export default class ConfirmModalContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <ConfirmModal
        handleClose={this.handleClose}
        handleShow={this.handleShow}
        show={this.state.show}
        message={this.props.message}
        onClick={this.props.onClick}
        variant={this.props.variant}
        label={this.props.label}
      />
    );
  }
}
