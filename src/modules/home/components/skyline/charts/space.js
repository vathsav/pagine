import React, { Component } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

// Assets
import {
  SKYLINE_ASSET_PATH_STAR_HORIZONTAL,
  SKYLINE_ASSET_PATH_STAR_VERTICAL,
  SKYLINE_ASSET_PATH_SUN,
} from './conditions/assets';

// Utils
import { getRandomInt, getTimeInMilan } from '../../../../../utils/helper';


class SkylineSpace extends Component {
  componentDidUpdate() {
    const { chartWidth, weather } = this.props;
    const originalWidth = 540;
    const scale = (chartWidth / originalWidth);

    const sunriseTime = new Date(weather.sys.sunrise * 1000 + weather.timezone);
    const sunsetTime = new Date(weather.sys.sunset * 1000 + weather.timezone);

    function drawSun(group) {
      // Draw the sun
      group
        .append('path')
        .attr('d', SKYLINE_ASSET_PATH_SUN)
        .attr('fill', '#FFA86D')
        .attr('stroke', '#000')
        .attr('stroke-width', '1.5')
        .attr('transform', `translate(${chartWidth * 0.2}, ${(chartWidth / 3.375) * 0.25}) scale(${scale})`);
    }

    function animateStars(group) {
      const numberOfStars = getRandomInt(10, 12);

      // Generate stars
      for (let count = 0; count < numberOfStars; count += 1) {
        const translateX = getRandomInt(20, chartWidth - 20);
        const translateY = getRandomInt(15, 60);
        const starScale = scale * getRandomInt(50, 90) * 0.01;

        group
          .append('path')
          .attr('class', `star${count}`)
          .attr('d', SKYLINE_ASSET_PATH_STAR_HORIZONTAL)
          .attr('stroke', '#000')
          .attr('stroke-width', '1.5')
          .attr('transform', `translate(${translateX}, ${translateY}) scale(${starScale})`);

        group
          .append('path')
          .attr('class', `star${count}`)
          .attr('d', SKYLINE_ASSET_PATH_STAR_VERTICAL)
          .attr('stroke', '#000')
          .attr('stroke-width', '1.5')
          .attr('transform', `translate(${translateX}, ${translateY}) scale(${starScale})`);
      }

      // Twinkle the stars
      function twinkleStars() {
        for (let count = 0; count < numberOfStars; count += 1) {
          group.selectAll(`.star${count}`)
            .transition()
            .ease(d3.easeSin)
            .duration(getRandomInt(1000, 2000))
            .attr('style', 'opacity: 0.5')
            .transition()
            .ease(d3.easeSin)
            .duration(getRandomInt(1000, 2000))
            .attr('style', 'opacity: 1')
            .on('end', twinkleStars);
        }
      }

      twinkleStars();
    }

    if (d3.select('#chart-condition svg').empty()) {
      const spaceGroup = d3.select('#chart-space')
        .append('svg')
        .attr('height', chartWidth / 3.375)
        .attr('width', chartWidth)
        .style('position', 'absolute')
        .append('g');

      if (getTimeInMilan() > sunriseTime && getTimeInMilan() < sunsetTime) {
        drawSun(spaceGroup);
      } else {
        animateStars(spaceGroup);
      }
    }
  }

  componentWillUnmount() {
    d3.select('#chart-space svg').remove();
  }

  render() {
    return (
      <div id="chart-space" />
    );
  }
}

SkylineSpace.propTypes = {
  chartWidth: PropTypes.number.isRequired,
  weather: PropTypes.object.isRequired,
};

export default SkylineSpace;
