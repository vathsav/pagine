import React, { Component } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';


class PostTimeline extends Component {
  componentDidMount() {
    const { numberOfPosts } = this.props;

    const colors = {
      red: '#FF0A43',
      cyan: '#00FFBF',
      blue: '#016EFF',
      black: '#212121',
    };

    const postHeight = 160;
    const postMarginBottom = 25;
    const timelineHeight = (postHeight * numberOfPosts) + (postMarginBottom * (numberOfPosts - 1));

    const timelineWrapperStyles = window.getComputedStyle(document.getElementById('timeline-wrapper'));
    const timelineWidth = parseInt(timelineWrapperStyles.width, 0)
      - parseInt(timelineWrapperStyles.paddingLeft, 0)
      - parseInt(timelineWrapperStyles.paddingRight, 0);

    const timelineVector = d3.select('#timeline')
      .append('svg')
      .attr('height', timelineHeight)
      .attr('width', timelineWidth);

    // Base line
    const lineGenerator = d3.line();
    const points = [
      [30, 0],
      [30, timelineHeight],
    ];

    const baseLine = lineGenerator(points);

    timelineVector
      .append('path')
      .attr('d', baseLine)
      .attr('fill', 'none')
      .attr('stroke-width', 1)
      .attr('stroke', colors.black);

    const smallCircleRadius = 5;
    const bigCircleRadius = 6;

    // Append the last circles
    timelineVector
      .append('circle')
      .attr('cx', points[1][0])
      .attr('cy', points[1][1] - bigCircleRadius)
      .attr('r', bigCircleRadius)
      .attr('fill', colors.black);

    // Append circles for each post
    for (let count = 0; count < numberOfPosts; count += 1) {
      timelineVector
        .append('circle')
        .attr('cx', points[0][0])
        .attr('cy', points[0][1] + (postHeight * count) + (postMarginBottom * count) + smallCircleRadius)
        .attr('r', smallCircleRadius)
        .attr('fill', () => {
          const keys = Object.keys(colors);
          keys.splice(keys.indexOf('black'), 1);

          return colors[keys[count % 3]];
        });
    }
  }

  render() {
    return (
      <div id="timeline" />
    );
  }
}

PostTimeline.propTypes = {
  numberOfPosts: PropTypes.number.isRequired,
};

export default PostTimeline;
