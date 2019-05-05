import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Introduction extends Component {
  render() {
    const { content } = this.props;

    return (
      <Row className="content">
        <Col sm={6} className="title-large padded">
            HELLO, YOU.
        </Col>

        <Col sm={6} className="content-large padded">
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
