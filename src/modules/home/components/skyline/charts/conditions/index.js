import React, { Component } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

// Skyline Assets
import {
  SKYLINE_ASSET_PATH_CLOUD_ONE,
  SKYLINE_ASSET_PATH_CLOUD_THREE,
  SKYLINE_ASSET_PATH_CLOUD_TWO,
  SKYLINE_ASSET_PATH_RAIN_DROPLET, SKYLINE_ASSET_PATH_SNOW_FLAKE,
} from './assets';

// Utils
import {
  WEATHER_STATUS_ASH,
  WEATHER_STATUS_CLEAR,
  WEATHER_STATUS_CLOUDS,
  WEATHER_STATUS_DRIZZLE,
  WEATHER_STATUS_DUST,
  WEATHER_STATUS_FOG,
  WEATHER_STATUS_HAZE,
  WEATHER_STATUS_MIST,
  WEATHER_STATUS_RAIN,
  WEATHER_STATUS_SAND,
  WEATHER_STATUS_SMOKE,
  WEATHER_STATUS_SNOW,
  WEATHER_STATUS_SQUALL,
  WEATHER_STATUS_THUNDERSTORM,
  WEATHER_STATUS_TORNADO,
} from '../../../../../../utils/constants';
import {
  getRandomInt,
  getTransformTranslation,
  resolveWeatherCode,
} from '../../../../../../utils/helper';


class SkylineCondition extends Component {
  constructor(props) {
    super(props);

    this.animationClouds = this.animationClouds.bind(this);
    this.animationRain = this.animationRain.bind(this);
    this.animationSnow = this.animationSnow.bind(this);
  }

  componentDidUpdate() {
    const { weather, chartWidth } = this.props;
    const originalWidth = 540;
    const scale = (chartWidth / originalWidth);

    let condition = null;

    if (weather && weather.weather) {
      condition = resolveWeatherCode(weather.weather[0].id);

      if (d3.select('#chart-condition svg').empty()) {
        const svgCondition = d3.select('#chart-condition')
          .append('svg')
          .attr('height', chartWidth / 2.66)
          .attr('width', chartWidth)
          .style('position', 'absolute');

        switch (condition.status) {
          case WEATHER_STATUS_THUNDERSTORM:
            this.animationClouds(svgCondition, condition.intensity, scale);
            this.animationRain(svgCondition, condition.intensity, scale);
            break;
          case WEATHER_STATUS_DRIZZLE:
            this.animationRain(svgCondition, condition.intensity, scale);
            break;
          case WEATHER_STATUS_RAIN:
            this.animationRain(svgCondition, condition.intensity, scale);
            break;
          case WEATHER_STATUS_SNOW:
            this.animationSnow(svgCondition, condition.intensity, scale);
            break;
          case WEATHER_STATUS_CLEAR:
            break;
          case WEATHER_STATUS_CLOUDS:
            this.animationClouds(svgCondition, condition.intensity, scale);
            break;
          case WEATHER_STATUS_MIST:
            break;
          case WEATHER_STATUS_SMOKE:
            break;
          case WEATHER_STATUS_HAZE:
            this.animationClouds(svgCondition, condition.intensity, scale);
            break;
          case WEATHER_STATUS_FOG:
            this.animationClouds(svgCondition, condition.intensity, scale);
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
  }

  componentWillUnmount() {
    d3.select('#chart-condition svg').remove();
  }

  animationRain(svgCondition, intensity, scale) {
    const { chartWidth } = this.props;
    const rainGroup = svgCondition.append('svg');
    let currentPhase = 0;
    let finishedPhase = 0;

    // Rain
    function pour() {
      for (let i = 0; i < 40; i += 1) {
        const positionX = getRandomInt(-30, chartWidth);
        const positionY = -50;

        rainGroup
          .append('g')
          .attr('class', `rain-drop-${currentPhase}`)
          .append('path')
          .attr('d', SKYLINE_ASSET_PATH_RAIN_DROPLET)
          .attr('stroke-width', 1)
          .attr('stroke', '#000')
          .attr('transform', `translate(${positionX + i}, ${positionY + getRandomInt(0, 50)}) scale(${scale})`)
          .transition()
          .ease(d3.easeLinear)
          .duration(getRandomInt(5000, 6000))
          .attr('transform', `translate(${positionX + i + 100}, ${chartWidth / 2.66}) scale(${scale})`);
      }

      currentPhase += 1;
      setTimeout(pour, 1000);
    }

    function cleanDroplets() {
      svgCondition.selectAll(`.rain-drop-${finishedPhase}`).remove();
      finishedPhase += 1;

      setTimeout(cleanDroplets, 1010);
    }

    setTimeout(pour, 1000);

    // Clear fallen droplets every 6 seconds
    setTimeout(cleanDroplets, 6000);
  }

  animationClouds(svgCondition, intensity, scale) {
    const { chartWidth } = this.props;
    const cloudGroup = svgCondition.append('svg');

    const initialPositions = {
      cloudOne: [getRandomInt(chartWidth * 0.1, chartWidth * 0.125), getRandomInt(8, 12)],
      cloudTwo: [getRandomInt(chartWidth * 0.2, chartWidth * 0.23), getRandomInt(22, 28)],
      cloudThree: [getRandomInt(chartWidth * 0.35, chartWidth * 0.37), getRandomInt(40, 45)],
      cloudFour: [getRandomInt(chartWidth * 0.52, chartWidth * 0.56), getRandomInt(8, 12)],
      cloudFive: [getRandomInt(chartWidth * 0.7, chartWidth * 0.70), getRandomInt(22, 28)],
      cloudSix: [getRandomInt(chartWidth * 0.65, chartWidth * 0.68), getRandomInt(30, 35)],
    };

    const cloudOne = cloudGroup
      .append('g')
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_ONE)
      .attr('transform', `translate(${initialPositions.cloudOne[0]}, ${initialPositions.cloudOne[1]}) scale(${scale})`);

    const cloudTwo = cloudGroup
      .append('g')
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_TWO)
      .attr('transform', `translate(${initialPositions.cloudTwo[0]}, ${initialPositions.cloudTwo[1]}) scale(${scale})`);

    const cloudThree = cloudGroup
      .append('g')
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_THREE)
      .attr('transform', `translate(${initialPositions.cloudThree[0]}, ${initialPositions.cloudThree[1]}) scale(${scale})`);

    const cloudFour = cloudGroup
      .append('g')
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_ONE)
      .attr('transform', `translate(${initialPositions.cloudFour[0]}, ${initialPositions.cloudFour[1]}) scale(${scale})`);

    const cloudFive = cloudGroup
      .append('g')
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_TWO)
      .attr('transform', `translate(${initialPositions.cloudFive[0]}, ${initialPositions.cloudFive[1]}) scale(${scale})`);

    const cloudSix = cloudGroup
      .append('g')
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_CLOUD_THREE)
      .attr('transform', `translate(${initialPositions.cloudSix[0]}, ${initialPositions.cloudSix[1]}) scale(${scale})`);

    cloudGroup.selectAll('path')
      .attr('stroke', '#000')
      .attr('stroke-width', '1.5')
      .attr('fill', '#fff');

    function loopTransition(group) {
      const translateCoordinates = getTransformTranslation(group.attr('transform'));

      group
        .transition()
        .ease(d3.easeSin)
        .duration(getRandomInt(15000, 18000))
        .attr('transform', `translate(${translateCoordinates[0] + (chartWidth * 0.2)}, ${translateCoordinates[1]}) scale(${scale})`)
        .transition()
        .ease(d3.easeSin)
        .duration(getRandomInt(15000, 18000))
        .attr('transform', `translate(${translateCoordinates[0]}, ${translateCoordinates[1]}) scale(${scale})`)
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

  animationSnow(svgCondition, intensity, scale) {
    const { chartWidth } = this.props;
    const rainGroup = svgCondition.append('svg');
    let currentPhase = 0;
    let finishedPhase = 0;

    // Rain
    function pour() {
      for (let i = 0; i < 30; i += 1) {
        const positionX = getRandomInt(0, chartWidth);
        const positionY = -50;

        rainGroup
          .append('g')
          .attr('class', `rain-drop-${currentPhase}`)
          .append('path')
          .attr('d', SKYLINE_ASSET_PATH_SNOW_FLAKE)
          .attr('stroke-width', 1)
          .attr('stroke', '#000')
          .attr('transform', `translate(${positionX + i}, ${positionY + getRandomInt(0, 50)}) scale(${scale})`)
          .transition()
          .ease(d3.easeLinear)
          .duration(getRandomInt(9000, 10000))
          .attr('transform', `translate(${positionX + i}, ${chartWidth / 2.66}) scale(${scale})`);
      }

      currentPhase += 1;
      setTimeout(pour, 2000);
    }

    function cleanDroplets() {
      svgCondition.selectAll(`.rain-drop-${finishedPhase}`).remove();
      finishedPhase += 1;

      setTimeout(cleanDroplets, 2020);
    }

    setTimeout(pour, 2000);

    // Clear fallen droplets every 6 seconds
    setTimeout(cleanDroplets, 10000);
  }

  render() {
    return (
      <div id="chart-condition" />
    );
  }
}

SkylineCondition.propTypes = {
  chartWidth: PropTypes.number.isRequired,
  weather: PropTypes.object,
};

SkylineCondition.defaultProps = {
  weather: {},
};

export default SkylineCondition;
