import React, { Component } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';


class PostTimeline extends Component {
  componentDidMount() {
    const { numberOfPosts } = this.props;

    const postHeight = 160;
    const postMarginBottom = 25;

    const lineHeight = (postHeight * numberOfPosts) + (postMarginBottom * (numberOfPosts - 1));

    const timelineVector = d3.select('#post-timeline').append('svg');

    timelineVector
      .attr('height', lineHeight)
      .attr('width', 60);

    // Base line
    const lineGenerator = d3.line();
    const points = [
      [30, 0],
      [30, lineHeight],
    ];

    const baseLine = lineGenerator(points);

    timelineVector
      .append('path')
      .attr('d', baseLine)
      .attr('fill', 'none')
      .attr('stroke-width', 3)
      .attr('stroke', '#999');

    const smallCircleRadius = 5;
    const bigCircleRadius = 6;

    // Append the first and last circles
    timelineVector
      .append('circle')
      .attr('cx', points[0][0])
      .attr('cy', points[0][1] + smallCircleRadius)
      .attr('r', smallCircleRadius);

    timelineVector
      .append('circle')
      .attr('cx', points[1][0])
      .attr('cy', points[1][1] - bigCircleRadius)
      .attr('r', bigCircleRadius);

    // Append circles for each post
    for (let count = 1; count < numberOfPosts; count += 1) {
      timelineVector
        .append('circle')
        .attr('cx', points[0][0])
        .attr('cy', points[0][1] + (postHeight * count) + (postMarginBottom * count))
        .attr('r', smallCircleRadius);
    }
  }

  render() {
    return (
      <div id="post-timeline" />
    );
  }
}

PostTimeline.propTypes = {
  numberOfPosts: PropTypes.number.isRequired,
};

export default PostTimeline;
