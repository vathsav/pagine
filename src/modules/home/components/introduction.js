import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Introduction extends Component {
  render() {
    return (
      <Row className="content">
        <Col sm={6} className="title-large padded">
            HELLO, YOU.
        </Col>

        <Col sm={6} className="content-large padded">
            I am Vathsav and I love gelato. I am a 23 year old programmer, designer, and a hardware and gaming
            enthusiast based in Milan, Italy. I'm currently a web developer at Vinhood - a startup that simplifies
            the world of wines by recommending the ideal wine for you based on your palate. I constantly aspire to
            build creative solutions to bridge the gap between the physical and digital worlds.
        </Col>

        {/* <Skyline/> */}
      </Row>
    );
  }
}

export default Introduction;
