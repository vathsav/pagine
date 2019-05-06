import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

// Images
import socialFacebook from '../../../assets/images/social-facebook.png';
import socialGithub from '../../../assets/images/social-github.png';
import socialInstagram from '../../../assets/images/social-instagram.png';
import socialLinkedIn from '../../../assets/images/social-linkedin.png';

// Constants
import {
  URL_CONNECT_FACEBOOK,
  URL_CONNECT_GITHUB,
  URL_CONNECT_INSTAGRAM,
  URL_CONNECT_LINKEDIN,
} from '../../../utils/constants';


class Footer extends Component {
  render() {
    return (
      <Row className="border-top-black align-items-end px-5 py-2 mx-0">
        <Col sm={4}>
          <div className="content-large">
            mail@vathsav.com
          </div>
          <div className="content-large font-weight-bold">
            © 2014-2019 Vathsav Harikrishnan
          </div>
        </Col>

        <Col sm={4} className="monospace text-center h-100">
          Handcrafted with &#x2764;
        </Col>

        <Col sm={4} className="social-icons my-auto">
          <a href={URL_CONNECT_INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <img src={socialInstagram} alt="Instagram" />
          </a>
          <a href={URL_CONNECT_GITHUB} target="_blank" rel="noopener noreferrer">
            <img src={socialGithub} alt="Github" />
          </a>
          <a href={URL_CONNECT_FACEBOOK} target="_blank" rel="noopener noreferrer">
            <img src={socialFacebook} alt="FB" />
          </a>
          <a href={URL_CONNECT_LINKEDIN} target="_blank" rel="noopener noreferrer">
            <img src={socialLinkedIn} alt="LinkedIn" />
          </a>
        </Col>
      </Row>
    );
  }
}

export default Footer;
