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

    this.updateChartWidth = this.updateChartWidth.bind(this);
  }

  componentDidMount() {
    const { chartWidth } = this.state;

    const chartClientWidth = document.getElementById('skyline-chart').clientWidth;

    if (chartWidth !== chartClientWidth) {
      this.setState({ chartWidth: chartClientWidth });
    }

    window.addEventListener('resize', this.updateChartWidth);
  }

  updateChartWidth() {
    if (document.getElementById('skyline-chart')) {
      const resizedWidth = document.getElementById('skyline-chart').clientWidth;
      const { chartWidth } = this.state;

      if (chartWidth !== resizedWidth) {
        this.setState({ chartWidth: resizedWidth });
      }
    }
  }

  render() {
    const { weather } = this.props;
    const { chartWidth } = this.state;

    return (
      <div id="skyline-chart" className="pt-0">
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
