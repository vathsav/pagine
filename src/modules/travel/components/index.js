import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import Globe from './charts/globe';


class TravelComponent extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <div className="title-large text-uppercase font-weight-bold">
          Places I've been to
        </div>

        <Globe />

        <div className="text-center py-3">
          <div className="title-small text-uppercase">Countries visited</div>
          <div className="title-large">02</div>
        </div>

        <Row>
          <Col>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, culpa delectus fugit illo magni modi porro
            quasi recusandae. Dolores omnis quisquam tempora veniam. Et pariatur quas quo reprehenderit tempore,
            voluptatibus.
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TravelComponent;
