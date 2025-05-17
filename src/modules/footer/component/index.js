import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <div className="absolute-bottom border-top-black">
        <Container>
          <Row className="align-items-end py-2 mx-0">
            <Col sm={12} md={12} lg={12} className="monospace text-center h-100 order-lg-1 order-md-0 order-0">
              Handcrafted with &#x2764;
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
