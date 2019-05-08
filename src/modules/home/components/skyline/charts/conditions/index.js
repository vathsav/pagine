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
import {
  getRandomInt,
  getTransformTranslation,
  getTranslation,
  resolveWeatherCode
} from '../../../../../../utils/helper';


class SkylineCondition extends Component {
  constructor(props) {
    super(props);

    this.animationClouds = this.animationClouds.bind(this);
  }

  componentDidMount() {
    const { weather } = this.props;
    let condition = null;

    if (weather && weather.weather) {
      condition = resolveWeatherCode(weather.weather[0].id);

      const svgCondition = d3.select('#chart-condition')
        .append('svg')
        .attr('height', 200)
        .attr('width', 600)
        .style('position', 'absolute');

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
  }

  animationClouds(svgCondition, intensity) {
    // This is wrong. Appending cloud on another. Append on a base group instead
    const cloudGroup = svgCondition.append('svg');

    const initialPositions = {
      cloudOne: [getRandomInt(40, 60), getRandomInt(8, 12)],
      cloudTwo: [getRandomInt(150, 170), getRandomInt(22, 28)],
      cloudThree: [getRandomInt(80, 100), getRandomInt(40, 45)],
      cloudFour: [getRandomInt(280, 300), getRandomInt(8, 12)],
      cloudFive: [getRandomInt(360, 380), getRandomInt(22, 28)],
      cloudSix: [getRandomInt(320, 340), getRandomInt(30, 35)],
    };

    const cloudOne = cloudGroup
      .append('g')
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_ONE)
      .attr('transform', `translate(${initialPositions.cloudOne[0]}, ${initialPositions.cloudOne[1]})`);

    const cloudTwo = cloudGroup
      .append('g')
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_TWO)
      .attr('transform', `translate(${initialPositions.cloudTwo[0]}, ${initialPositions.cloudTwo[1]})`);

    const cloudThree = cloudGroup
      .append('g')
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_THREE)
      .attr('transform', `translate(${initialPositions.cloudThree[0]}, ${initialPositions.cloudThree[1]})`);

    const cloudFour = cloudGroup
      .append('g')
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_ONE)
      .attr('transform', `translate(${initialPositions.cloudFour[0]}, ${initialPositions.cloudFour[1]})`);

    const cloudFive = cloudGroup
      .append('g')
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_TWO)
      .attr('transform', `translate(${initialPositions.cloudFive[0]}, ${initialPositions.cloudFive[1]})`);

    const cloudSix = cloudGroup
      .append('g')
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_THREE)
      .attr('transform', `translate(${initialPositions.cloudSix[0]}, ${initialPositions.cloudSix[1]})`);


    cloudGroup.selectAll('path')
      .attr('stroke', '#000')
      .attr('stroke-width', '1.5')
      .attr('fill', '#fff');

    function loopTransition(group) {
      const translateCoordinates = getTransformTranslation(group.attr('transform'));
      console.log(translateCoordinates);

      group
        .transition()
        .ease(d3.easeSin)
        .duration(getRandomInt(15000, 18000))
        .attr('transform', `translate(${translateCoordinates[0] + 125}, ${translateCoordinates[1]})`)
        .transition()
        .ease(d3.easeSin)
        .duration(getRandomInt(15000, 18000))
        .attr('transform', `translate(${translateCoordinates[0]}, ${translateCoordinates[1]})`)
        .on('end', () => {
          loopTransition(group);
        });
    }

    loopTransition(cloudOne);
    loopTransition(cloudTwo);
    loopTransition(cloudThree);
    loopTransition(cloudFour);
    loopTransition(cloudFive);
    loopTransition(cloudSix);
  }

  render() {
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
