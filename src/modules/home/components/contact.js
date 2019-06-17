import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';


class Contact extends Component {
  render() {
    return (
      <Container fluid>
        <div className="title-large text-uppercase font-weight-bold text-center mb-4">Want to get in touch?</div>

        <Row>
          <Col sm={6}>
            <input type="text" className="field-input mb-2 mb-lg-3" placeholder="Name" />
          </Col>

          <Col sm={6}>
            <input type="email" className="field-input mb-2 mb-lg-3" placeholder="Email" />
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <textarea className="field-input area" placeholder="Message" />
          </Col>
        </Row>

        <Row className="text-center">
          <Col sm={12}>
            <input type="button" className="button-submit bg-red-dark mt-2 mt-lg-3 mb-5" value="submit" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
