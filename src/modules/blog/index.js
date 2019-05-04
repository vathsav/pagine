import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import Footer from '../footer/component';
import Header from '../header/component';
import Sidebar from './components/sidebar';

class Blog extends Component {
  render() {
    return (
      <Container fluid className="bg-blue-light">
        <Header />

        <Container>
          <Row>
            <Col md={9}>
              Content
            </Col>

            <Col md={3}>
              <Sidebar />
            </Col>
          </Row>
        </Container>

        <Footer />
      </Container>
    );
  }
}

export default Blog;
