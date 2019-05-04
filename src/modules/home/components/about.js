import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import me from '../../../assets/images/vathsav.png';

class About extends Component {
  render() {
    return (
      <Row className="bg-red-dark color-white content-medium skew">
        <Col sm={6} className="balance">
          <p>
            I discovered the joy of programming when I was 11, and its been my passion ever since. My first program
            was to turn toggle an image of a light bulb using Visual Basic, and it
            {' '}
            <i>blew</i>
            {' '}
            my mind. I enjoy designing and developing products and the process of building them intrigues me.
          </p>

          <p>
            I also love photography, videography, and I occasionally play the guitar. This website is essentially my
            hub where I write about the stuff I work on and is an expression of my take on life.
          </p>

          <p>
            Check out my portfolio and blog to see what I've been up to.
          </p>
        </Col>

        <Col sm={6} className="text-center balance">
          <img src={me} alt="vathsav" />

          <p>
            This was taken in Oregon, USA on the 3rd of January '19.
          </p>
        </Col>
      </Row>
    );
  }
}

export default About;
