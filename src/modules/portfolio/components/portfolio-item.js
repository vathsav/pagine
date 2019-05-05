import React, { Component } from 'react';
import PropTypes from 'prop-types';


class PortfolioItem extends Component {
  render() {
    const { content } = this.props;

    return (
      <div>
        {JSON.stringify(content)}
      </div>
    );
  }
}

PortfolioItem.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PortfolioItem;
