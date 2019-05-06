import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Constants
import { URL_BLOG_LIST, URL_HOME, URL_PORTFOLIO } from '../../../utils/constants';

// Images
import logo from '../../../assets/images/logo.png';


class Header extends Component {
  render() {
    const { color } = this.props;

    return (
      <Row className={`sticky-top bg-${color}-light`}>
        <Col sm={7}>
          <img src={logo} alt="Vathsav" className="logo" />
        </Col>

        <Col sm={5} className="text-center align-self-center">
          <Link to={URL_HOME} className="nav-item content-large color-black">Home</Link>
          <Link to={URL_BLOG_LIST} className="nav-item content-large color-black px-5">Blog</Link>
          <Link to={URL_PORTFOLIO} className="nav-item content-large color-black">Portfolio</Link>
        </Col>
      </Row>
    );
  }
}

Header.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Header;
