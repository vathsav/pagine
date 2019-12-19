import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

// Components
import { PageView } from '../../tracking';


class Error404 extends Component {
  componentDidMount() {
    PageView();
  }

  render() {
    return (
      <Container>
        <Row>
          404 error!
        </Row>

        <Row>
          Oops! The page you requested doesn&apos;t exist!

          If you think it should be here, let me know.

          Would you like to go to my homepage instead?
        </Row>
      </Container>
    );
  }
}

export default Error404;
