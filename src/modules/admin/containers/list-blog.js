import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';


class ListBlog extends Component {
  render() {
    return (
      <Container fluid>
          List of Blog Posts
      </Container>
    );
  }
}

export default firestoreConnect()(ListBlog);
