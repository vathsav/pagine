import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
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
        <div className="title-large text-uppercase font-weight-bold mb-4">
          The work of my hands.
        </div>

        <div className="card-columns">
          {portfolioMine}
        </div>

        <div className="title-large text-uppercase font-weight-bold my-4">
          Open source contributions.
        </div>

        <div className="card-columns">
          {portfolioContributions}
        </div>
      </Container>
    );
  }
}

Portfolio.propTypes = {
  items: PropTypes.object.isRequired,
};

export default Portfolio;
