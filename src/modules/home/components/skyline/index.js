import React, { Component } from 'react';

// Components
import PropTypes from 'prop-types';
import SkylineBuildings from './buildings';
import SkylineSky from './sky';


class SkylineAnimation extends Component {
  render() {
    const { weather } = this.props;

    return (
      <div className="pt-5">
        <SkylineSky weather={weather} />
        <SkylineBuildings />
      </div>
    );
  }
}

SkylineAnimation.propTypes = {
  weather: PropTypes.object,
};

SkylineAnimation.defaultProps = {
  weather: {},
};

export default SkylineAnimation;
