import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import imageVathsav from '../../../assets/images/vathsav.png';


class About extends Component {
  render() {
    const { content } = this.props;

    return (
      <div>
        <div className="skew-up-top-right bg-red-dark" />

        <div className="bg-red-dark">
          <Container className="color-white content-medium py-5">
            <Row>

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
          </Container>
        </div>

        <div className="skew-down-bottom-left bg-red-dark" />
      </div>
    );
  }
}

About.propTypes = {
  content: PropTypes.string.isRequired,
};

export default About;
