import React, { Component } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

// Skyline Assets
import { SKYLINE_ASSET_PATH_CLOUD_ONE, SKYLINE_ASSET_PATH_CLOUD_THREE, SKYLINE_ASSET_PATH_CLOUD_TWO } from './assets';

// Utils
import {
  WEATHER_STATUS_ASH,
  WEATHER_STATUS_CLEAR,
  WEATHER_STATUS_CLOUDS,
  WEATHER_STATUS_DRIZZLE, WEATHER_STATUS_DUST, WEATHER_STATUS_FOG, WEATHER_STATUS_HAZE, WEATHER_STATUS_MIST,
  WEATHER_STATUS_RAIN, WEATHER_STATUS_SAND, WEATHER_STATUS_SMOKE,
  WEATHER_STATUS_SNOW, WEATHER_STATUS_SQUALL,
  WEATHER_STATUS_THUNDERSTORM, WEATHER_STATUS_TORNADO,
} from '../../../../../../utils/constants';
import { resolveWeatherCode } from '../../../../../../utils/helper';


class SkylineCondition extends Component {
  constructor(props) {
    super(props);

    this.animationClouds = this.animationClouds.bind(this);
  }

  componentDidMount() {
    const { weather } = this.props;
    const condition = resolveWeatherCode(weather.weather[0].id);

    const svgCondition = d3.select('#chart-condition')
      .append('svg')
      .attr('height', 200)
      .attr('width', 600)
      .style('position', 'absolute')
      .append('g');

    this.animationClouds(svgCondition, condition.intensity);

    switch (condition.status) {
      case WEATHER_STATUS_THUNDERSTORM:
        break;
      case WEATHER_STATUS_DRIZZLE:
        break;
      case WEATHER_STATUS_RAIN:
        break;
      case WEATHER_STATUS_SNOW:
        break;
      case WEATHER_STATUS_CLEAR:
        break;
      case WEATHER_STATUS_CLOUDS:
        break;
      case WEATHER_STATUS_MIST:
        break;
      case WEATHER_STATUS_SMOKE:
        break;
      case WEATHER_STATUS_HAZE:
        break;
      case WEATHER_STATUS_FOG:
        break;
      case WEATHER_STATUS_SAND:
        break;
      case WEATHER_STATUS_DUST:
        break;
      case WEATHER_STATUS_ASH:
        break;
      case WEATHER_STATUS_SQUALL:
        break;
      case WEATHER_STATUS_TORNADO:
        break;
      default:
        break;
    }
  }

  animationClouds(svgCondition, intensity) {
    const pathOne = svgCondition
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_ONE)
      .attr('transform', 'translate(50,5)');

    svgCondition
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_TWO);

    svgCondition
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_THREE);

    svgCondition.selectAll('path')
      .attr('stroke', '#000')
      .attr('stroke-width', '1.5')
      .attr('fill', 'none');

    function loopTransition() {
      pathOne
        .transition()
        .ease(d3.easeSin)
        .duration(40000)
        .attr('transform', 'translate(450,5)')
        .transition()
        .ease(d3.easeSin)
        .duration(40000)
        .attr('transform', 'translate(50,5)')
        .on('end', loopTransition);
    }

    loopTransition();
  }

  render() {
    console.log('r');

    return (
      <div id="chart-condition" />
    );
  }
}

SkylineCondition.propTypes = {
  weather: PropTypes.object,
};

SkylineCondition.defaultProps = {
  weather: {},
};

export default SkylineCondition;
