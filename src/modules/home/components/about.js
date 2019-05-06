import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import imageVathsav from '../../../assets/images/vathsav.png';


class About extends Component {
  render() {
    const { content } = this.props;

    return (
      <div>
        <div className="skew-up-top-right bg-red-dark" />

        <Row className="bg-red-dark color-white content-medium py-5">

          <Col sm={6}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Col>

          <Col sm={6} className="text-center">
            <img src={imageVathsav} alt="vathsav" />

            <p>
            This was taken in Oregon, USA on the 3rd of January &apos;19.
            </p>
          </Col>

        </Row>

        <div className="skew-down-bottom-left bg-red-dark" />
      </div>
    );
  }
}

About.propTypes = {
  content: PropTypes.string.isRequired,
};

export default About;
