import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import imageVathsav from '../../../assets/images/vathsav.png';


class About extends Component {
  render() {
    const { content } = this.props;

    return (
      <Row className="bg-red-dark color-white content-medium skew">
        <Col sm={6} className="balance">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Col>

        <Col sm={6} className="text-center balance">
          <img src={imageVathsav} alt="vathsav" />

          <p>
            This was taken in Oregon, USA on the 3rd of January &apos;19.
          </p>
        </Col>
      </Row>
    );
  }
}

About.propTypes = {
  content: PropTypes.string.isRequired,
};

export default About;
