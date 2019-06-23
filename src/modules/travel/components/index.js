import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import CountryCard from './country-card';
import Globe from './charts/globe';


class TravelComponent extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <div className="title-large text-uppercase font-weight-bold">
          Places I've been to.
        </div>

        <Globe />

        <Row className="text-center py-3">
          <Col xs={4}>
            <div className="title-small text-uppercase">Travel Days</div>
            <div className="title-large">50</div>
          </Col>

          <Col xs={4}>
            <div className="title-small text-uppercase">Countries visited</div>
            <div className="title-large">15</div>
          </Col>

          <Col xs={4}>
            <div className="title-small text-uppercase">Languages Spoken</div>
            <div className="title-large">06</div>
          </Col>
        </Row>

        <Row className="py-5 text-center">
          <Col>
            One life and one big beautiful blue planet is all we've got. My philosophy is to travel, learn and
            experience as many cultures as I can, while doing what I love - engineering.
          </Col>
        </Row>

        <div className="card-columns">
          <CountryCard country="india" />
          <CountryCard country="italy" />
          <CountryCard country="switzerland" />
          <CountryCard country="romania" />
          <CountryCard country="denmark" />
          <CountryCard country="sweden" />
          <CountryCard country="france" />
          <CountryCard country="poland" />
          <CountryCard country="finland" />
          <CountryCard country="netherlands" />
          <CountryCard country="usa" />
          <CountryCard country="germany" />
          <CountryCard country="croatia" />
          <CountryCard country="slovenia" />
          <CountryCard country="vatican" />
        </div>

        <div className="title-large text-uppercase font-weight-bold py-5">
          Places I'd like to visit.
        </div>

        <Row className="pb-5">
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
