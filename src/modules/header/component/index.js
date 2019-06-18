import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Components
import ScrollIndicator from './scroll-indicator';

// Images
import logo from '../../../assets/images/logo.png';

// Utils
import { URL_BLOG_LIST, URL_HOME, URL_PORTFOLIO } from '../../../utils/constants';


class Header extends Component {
  render() {
    const { color, progress } = this.props;

    return (
      <div className={`sticky-top bg-${color}-light mb-xs-1 mb-md-4`}>
        <Container>
          <Row>
            <Col xs={3} sm={4}>
              <img src={logo} alt="Vathsav" className="logo my-3 mx-0" />
            </Col>

            <Col xs={9} sm={8} className="text-right align-self-center">
              <Link to={URL_HOME} className="nav-item content-large color-black">Home</Link>
              <Link to={URL_BLOG_LIST} className="nav-item content-large color-black px-4 px-lg-5">Blog</Link>
              <Link to={URL_PORTFOLIO} className="nav-item content-large color-black">Portfolio</Link>
            </Col>
          </Row>
        </Container>

        {progress
          && (
            <Col sm={12} className="text-center align-self-center px-0">
              <ScrollIndicator color={color} />
            </Col>
          )
        }
      </div>
    );
  }
}

Header.defaultProps = {
  progress: false,
};

Header.propTypes = {
  color: PropTypes.string.isRequired,
  progress: PropTypes.bool,
};

export default Header;
