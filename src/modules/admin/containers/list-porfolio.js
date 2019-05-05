import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';


class ListPortfolio extends Component {
  render() {
    return (
      <Container fluid>
        List of Portfolio Items
      </Container>
    );
  }
}

export default firestoreConnect()(ListPortfolio);
