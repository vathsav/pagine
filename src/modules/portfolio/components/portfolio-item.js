import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


class PortfolioItem extends Component {
  render() {
    const { content } = this.props;

    return (
      <Col md={4} className="card mx-2 my-3">
        <img src={content.image} alt="" className="portfolio-item" />

        <div>
          {content.title}
        </div>

        <div>
          {content.url}
        </div>

        <div>
          {content.description}
        </div>

        <div>
          {content.tags}
        </div>
      </Col>
    );
  }
}

PortfolioItem.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PortfolioItem;
