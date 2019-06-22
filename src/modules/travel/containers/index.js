import React, { Component } from 'react';

// Components
import { Container } from 'react-bootstrap';
import TravelComponent from '../components';
import Header from '../../header/component';
import Footer from '../../footer/component';


class TravelContainer extends Component {
  render() {
    return (
      <Container fluid className="main bg-cyan-light px-0">
        <Header color="cyan" />

        <TravelComponent />

        <Footer />
      </Container>
    );
  }
}

export default TravelContainer;
