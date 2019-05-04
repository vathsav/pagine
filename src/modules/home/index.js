import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

// Components
import About from './components/about';
import Contact from './components/contact';
import Footer from '../footer/component';
import Header from '../header/component';
import Introduction from './components/introduction';

class Home extends Component {
  render() {
    return (
      <Container fluid className="bg-red-light">
        <Header />

        <Introduction />

        <About />

        <Container>
          <Contact />
        </Container>

        <Footer />
      </Container>
    );
  }
}

export default Home;
