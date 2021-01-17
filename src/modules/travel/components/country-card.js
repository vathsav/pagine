import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CountryCard extends Component {
  render() {
    const { country } = this.props;

    return (
      <div className="card mb-3 p-0">
        <div className="p-3">
          <div className="title-small pb-2 text-uppercase">
            {country.display_name}
          </div>

          <div className="content-small">
            {country.description}
          </div>
        </div>
      </div>
    );
  }
}

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryCard;
