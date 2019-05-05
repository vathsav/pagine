import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Components
import PortfolioItem from './portfolio-item';


class Portfolio extends Component {
  render() {
    const { items } = this.props;

    const portfolioItems = [];

    Object.keys(items).forEach((key) => {
      portfolioItems.push(<PortfolioItem key={key} content={items[key]} />);
    });

    return (
      <Container>
        <Row>
          {portfolioItems}
        </Row>
      </Container>
    );
  }
}

Portfolio.propTypes = {
  items: PropTypes.object.isRequired,
};

export default Portfolio;
