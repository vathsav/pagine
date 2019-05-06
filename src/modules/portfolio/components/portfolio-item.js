import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


class PortfolioItem extends Component {
  render() {
    const { content } = this.props;

    return (
      <Col md={4} className="card mx-2 my-3">
        <div>
          url
          {content.url}
        </div>

        <div>
          title
          {content.title}
        </div>

        <div>
          image
          {content.image}
        </div>

        <div>
          description
          {content.description}
        </div>
      </Col>
    );
  }
}

PortfolioItem.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PortfolioItem;
