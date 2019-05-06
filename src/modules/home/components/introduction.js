import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Components
import SkylineAnimation from './skyline/index';


class Introduction extends Component {
  render() {
    const { content } = this.props;

    return (
      <Row>
        <Col sm={6} className="title-large">
          HELLO, YOU.

          {/* TODO Move the skyline to the index? */}
          <SkylineAnimation />
        </Col>

        <Col sm={6} className="content-large">
          {content}
        </Col>

        {/* <Skyline/> */}
      </Row>
    );
  }
}

Introduction.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Introduction;
