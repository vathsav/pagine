import React, { Component } from 'react';
import * as d3 from 'd3';

// Assets
import {
  SKYLINE_ASSET_PATH_STAR_HORIZONTAL,
  SKYLINE_ASSET_PATH_STAR_VERTICAL,
  SKYLINE_ASSET_PATH_SUN,
} from './conditions/assets';

// Utils
import { getRandomInt } from '../../../../../utils/helper';


class SkylineSpace extends Component {
  componentDidMount() {
    const spaceGroup = d3.select('#chart-space')
      .append('svg')
      .attr('height', 300)
      .attr('width', 600)
      .style('position', 'absolute')
      .append('g');

    // Generate stars
    for (let count = 0; count < getRandomInt(8, 10); count += 1) {
      const translateX = getRandomInt(20, 550);
      const translateY = getRandomInt(5, 50);

      spaceGroup
        .append('path')
        .attr('class', 'star')
        .attr('d', SKYLINE_ASSET_PATH_STAR_HORIZONTAL)
        .attr('stroke', '#000')
        .attr('stroke-width', '1.5')
        .attr('transform', `translate(${translateX},${translateY})scale(${0.9})`);

      spaceGroup
        .append('path')
        .attr('class', 'star')
        .attr('d', SKYLINE_ASSET_PATH_STAR_VERTICAL)
        .attr('stroke', '#000')
        .attr('stroke-width', '1.5')
        .attr('transform', `translate(${translateX},${translateY})scale(${0.9})`);
    }

    // Twinkle the stars
    function twinkleStars() {
      spaceGroup.selectAll('.star')
        .transition()
        .ease(d3.easeSin)
        .duration(2000)
        .attr('style', 'opacity: 0.75')
        .transition()
        .ease(d3.easeSin)
        .duration(2000)
        .attr('style', 'opacity: 1')
        .on('end', twinkleStars);
    }

    twinkleStars();

    // Draw the sun
    spaceGroup
      .append('path')
      .attr('d', SKYLINE_ASSET_PATH_SUN)
      .attr('fill', '#FFA86D')
      .attr('stroke', '#000')
      .attr('stroke-width', '1.5')
      .attr('transform', 'translate(120,25)scale(.8)');
  }

  render() {
    return (
      <div id="chart-space" />
    );
  }
}

export default SkylineSpace;
