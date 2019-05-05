import React, { Component } from 'react';
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
      <div>
        {portfolioItems}
      </div>
    );
  }
}

Portfolio.propTypes = {
  items: PropTypes.object.isRequired,
};

export default Portfolio;
