import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Components
import PortfolioItem from './portfolio-item';


class Portfolio extends Component {
  render() {
    const { items } = this.props;

    const portfolioMine = [];
    const portfolioContributions = [];

    Object.keys(items).forEach((key) => {
      if (items[key].isContribution) {
        portfolioContributions.push(<PortfolioItem key={key} content={items[key]} />);
      } else {
        portfolioMine.push(<PortfolioItem key={key} content={items[key]} />);
      }
    });

    return (
      <Container>

        <div className="title-large">
          THE WORK OF MY HANDS.
        </div>

        <Row>
          {portfolioMine}
        </Row>

        <div className="title-large">
          OPEN SOURCE CONTRIBUTIONS.
        </div>

        <Row>
          {portfolioContributions}
        </Row>
      </Container>
    );
  }
}

Portfolio.propTypes = {
  items: PropTypes.object.isRequired,
};

export default Portfolio;
