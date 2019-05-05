import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


class PortfolioItem extends Component {
  render() {
    const { content } = this.props;

    return (
      <Col md={4} className="card">
        {JSON.stringify(content)}
      </Col>
    );
  }
}

PortfolioItem.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PortfolioItem;
