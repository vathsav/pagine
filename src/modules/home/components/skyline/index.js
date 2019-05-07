import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import SkylineBuildings from './charts/buildings';
import SkylineCondition from './charts/conditions/index';
import SkylineSpace from './charts/space';


class SkylineAnimation extends Component {
  render() {
    const { weather } = this.props;

    return (
      <div className="pt-5">
        {/* Time of the day */}
        <SkylineSpace />

        {/* Weather Condition */}
        <SkylineCondition weather={weather} />

        {/* Skyline of Milano */}
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
