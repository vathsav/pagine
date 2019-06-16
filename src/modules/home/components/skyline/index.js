import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import SkylineLandscape from './charts/landscape';
import SkylineCondition from './charts/conditions/index';
import SkylineSpace from './charts/space';


class SkylineAnimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartWidth: 0,
    };
  }

  componentDidMount() {
    const { chartWidth } = this.state;

    const chartClientWidth = document.getElementById('skyline-chart').clientWidth;

    if (chartWidth !== chartClientWidth) {
      this.setState({ chartWidth: chartClientWidth });
    }
  }

  render() {
    const { weather } = this.props;
    const { chartWidth } = this.state;

    return (
      <div id="skyline-chart" className="pt-5">
        {/* Time of the day */}
        <SkylineSpace chartWidth={chartWidth} />

        {/* Weather Condition */}
        <SkylineCondition weather={weather} chartWidth={chartWidth} />

        {/* Skyline of Milano */}
        <SkylineLandscape chartWidth={chartWidth} />
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
