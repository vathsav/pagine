import React, { Component } from 'react';
import { Row, Spinner } from 'react-bootstrap';


class PopupSubscribe extends Component {
  render() {
    return (
      <Row>
        <Spinner animation="grow" />
      </Row>
    );
  }
}

export default PopupSubscribe;
