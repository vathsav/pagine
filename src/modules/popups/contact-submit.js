import React, { Component } from 'react';
import { Row, Spinner } from 'react-bootstrap';


class PopupSubmit extends Component {
  render() {
    return (
      <Row>
        <Spinner animation="grow" />
      </Row>
    );
  }
}

export default PopupSubmit;
