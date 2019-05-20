import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Images
import socialFacebook from '../../../assets/images/social-facebook.png';
import socialGithub from '../../../assets/images/social-github.png';
import socialInstagram from '../../../assets/images/social-instagram.png';
import socialLinkedIn from '../../../assets/images/social-linkedin.png';

// Utils
import {
  URL_CONNECT_FACEBOOK,
  URL_CONNECT_GITHUB,
  URL_CONNECT_INSTAGRAM,
  URL_CONNECT_LINKEDIN,
} from '../../../utils/constants';


class Footer extends Component {
  render() {
    return (
      <div className="border-top-black">
        <Container>
          <Row className="align-items-end py-2 mx-0">
            <Col sm={4} md={6} lg={4} className="content-medium order-lg-0 order-md-1 order-2 text-center text-lg-left">
              <div>
                mail@vathsav.com
              </div>
              <div className="font-weight-bold">
                © 2014-2019 Vathsav Harikrishnan
              </div>
            </Col>

            <Col sm={4} md={12} lg={4} className="monospace text-center h-100 order-lg-1 order-md-0 order-0">
              Handcrafted with &#x2764;
            </Col>

            <Col sm={4} md={6} lg={4} className="my-auto order-lg-2 order-md-2 order-1 text-center text-lg-right">
              <a href={URL_CONNECT_INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <img src={socialInstagram} alt="Instagram" className="social" />
              </a>
              <a href={URL_CONNECT_GITHUB} target="_blank" rel="noopener noreferrer">
                <img src={socialGithub} alt="Github" className="social" />
              </a>
              <a href={URL_CONNECT_FACEBOOK} target="_blank" rel="noopener noreferrer">
                <img src={socialFacebook} alt="FB" className="social" />
              </a>
              <a href={URL_CONNECT_LINKEDIN} target="_blank" rel="noopener noreferrer">
                <img src={socialLinkedIn} alt="LinkedIn" className="social" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
