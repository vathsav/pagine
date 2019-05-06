import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

// Images
import socialFacebook from '../../../assets/images/social-facebook.png';
import socialGithub from '../../../assets/images/social-github.png';
import socialInstagram from '../../../assets/images/social-instagram.png';
import socialLinkedIn from '../../../assets/images/social-linkedin.png';


class Footer extends Component {
  render() {
    return (
      <Row className="border-black align-items-end px-5 py-">
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
          <img src={socialInstagram} alt="Instagram" />
          <img src={socialGithub} alt="Github" />
          <img src={socialFacebook} alt="FB" />
          <img src={socialLinkedIn} alt="LinkedIn" />
        </Col>
      </Row>
    );
  }
}

export default Footer;
