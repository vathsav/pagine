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
    const { chartWidth } = this.props;

    const spaceGroup = d3.select('#chart-space')
      .append('svg')
      .attr('height', chartWidth / 3.375)
      .attr('width', chartWidth)
      .style('position', 'absolute')
      .append('g');

    const originalWidth = 540;
    const scale = (chartWidth / originalWidth);

    function animateStars() {
      // Generate stars
      for (let count = 0; count < getRandomInt(8, 10); count += 1) {
        const translateX = getRandomInt(20, chartWidth);
        const translateY = getRandomInt(5, 50);

        spaceGroup
          .append('path')
          .attr('class', 'star')
          .attr('d', SKYLINE_ASSET_PATH_STAR_HORIZONTAL)
          .attr('stroke', '#000')
          .attr('stroke-width', '1.5')
          .attr('transform', `translate(${translateX}, ${translateY}) scale(${scale})`);

        spaceGroup
          .append('path')
          .attr('class', 'star')
          .attr('d', SKYLINE_ASSET_PATH_STAR_VERTICAL)
          .attr('stroke', '#000')
          .attr('stroke-width', '1.5')
          .attr('transform', `translate(${translateX}, ${translateY}) scale(${scale})`);
      }

      // Twinkle the stars
      function twinkleStars() {
        spaceGroup.selectAll('.star')
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

      twinkleStars();
    }

    function drawSun() {
      // Draw the sun
      spaceGroup
        .append('path')
        .attr('d', SKYLINE_ASSET_PATH_SUN)
        .attr('fill', '#FFA86D')
        .attr('stroke', '#000')
        .attr('stroke-width', '1.5')
        .attr('transform', `translate(${chartWidth * 0.2}, ${(chartWidth / 3.375) * 0.25}) scale(${scale})`);
    }

    console.log(getTimeInMilan());

    if (getTimeInMilan() > 21 || getTimeInMilan() < 5) {
      animateStars();
    } else {
      drawSun();
    }
  }

  render() {
    return (
      <div id="chart-space" />
    );
  }
}

SkylineSpace.propTypes = {
  chartWidth: PropTypes.number.isRequired,
};

export default SkylineSpace;
