import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

// Components
import Footer from '../footer/component';
import Header from '../header/component';

class Portfolio extends Component {
  render() {
    return (
      <Container fluid className="bg-cyan-light">
        <Header />

          Portfolio

        <Footer />
      </Container>
    );
  }
}

export default Portfolio;
