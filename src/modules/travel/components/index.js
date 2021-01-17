import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Components
import CountryCard from './country-card';
import Globe from './charts/globe';

class TravelComponent extends Component {
  render() {
    const { content, travel } = this.props;
    const countriesVisited = [];
    const stories = [];

    Object.keys(travel).forEach((country) => {
      countriesVisited.push(travel[country].name);
      stories.push(<CountryCard key={travel[country].rank} country={travel[country]} />);
    });

    return (
      <Container>
        <div className="title-large text-uppercase font-weight-bold">
          Places I&apos;ve been to.
        </div>

        <Globe countriesVisited={countriesVisited} />

        <Row className="text-center pb-0 pb-md-1 pb-lg-2 h-100">
          <Col xs={4} className="h-100">
            <div className="title-small text-uppercase mb-2 mb-lg-0 my-0">Travel Days</div>
          </Col>

          <Col xs={4}>
            <div className="title-small text-uppercase mb-2 mb-lg-0">Countries Visited</div>
          </Col>

          <Col xs={4}>
            <div className="title-small text-uppercase mb-2 mb-lg-0">Languages Spoken</div>
          </Col>
        </Row>

        <Row className="text-center">
          <Col xs={4}>
            <div className="title-large">75+</div>
          </Col>

          <Col xs={4}>
            <div className="title-large">{Object.keys(travel).length}</div>
          </Col>

          <Col xs={4}>
            <div className="title-large">06</div>
          </Col>
        </Row>

        <Row className="py-5 text-center">
          <Col>
            { content.travel.description }
          </Col>
        </Row>

        <div className="card-columns">
          {stories}
        </div>

        <div className="title-large text-uppercase font-weight-bold py-5">
          Places I&apos;d like to visit.
        </div>

        <Row className="pb-5">
          <Col>
            { content.travel.future }
          </Col>
        </Row>
      </Container>
    );
  }
}

TravelComponent.propTypes = {
  content: PropTypes.object,
  travel: PropTypes.object,
};

TravelComponent.defaultProps = {
  content: {},
  travel: {},
};

export default TravelComponent;
