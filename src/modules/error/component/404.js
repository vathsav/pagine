import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

// Components
import { PageView } from '../../tracking';
import Header from '../../header/component';

// Images
import gelato from '../../../assets/images/gelato.png';

class Error404 extends Component {
  componentDidMount() {
    PageView();
  }

  render() {
    return (
      <Container fluid className="main bg-red-light px-0 full-height">
        <Header color="red" />

        <Container>
          <Row>
            <div className="text-center title-large w-100 mt-5 pt-5">
              Error 404
            </div>

            <div className="text-center title-medium w-100 mt-3">
              Oops! The page you requested doesn&apos;t exist!
            </div>

            <div className="text-center w-100 my-4 inverted-gelato">
              <img src={gelato} alt="" />
            </div>
          </Row>

          <Row>
            <div className="content-medium text-center w-100">
              Would you like to go to the
              {' '}
              <a href="/" className="font-weight-bold color-black hover-white">homepage</a>
              {' '}
              instead?
            </div>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Error404;
