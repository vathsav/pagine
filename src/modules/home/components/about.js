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
          <Container className="color-white content-medium py-4">
            <Row>
              <Col md={12} lg={6} className="order-lg-first order-last zindex-tooltip">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </Col>

              <Col md={12} lg={6} className="text-center order-lg-last order-first mx-auto">
                <img src={imageVathsav} alt="vathsav" className="myself" />

                <div className="font-weight-bold pt-1 pb-3 w-75 mx-auto">
                  This was taken in Seaside, Oregon on the 3rd of January &apos;19.
                </div>
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
