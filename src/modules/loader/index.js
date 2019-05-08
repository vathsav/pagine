import React, { Component } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';


class Loader extends Component {
  render() {
    const { color } = this.props;

    return (
      <Row className={`bg-${color}-light vh-100 align-items-center justify-content-center mx-0`}>
        <Spinner animation="grow" className={`color-${color}-dark`} />
      </Row>
    );
  }
}

Loader.propTypes = {
  color: PropTypes.string,
};

Loader.defaultProps = {
  color: 'black',
};

export default Loader;
