import React, { Component } from 'react';
import * as d3 from 'd3';

// Images
import iconPause from '../../../../assets/images/icon-pause.png';
import iconPlay from '../../../../assets/images/icon-play.png';


let analyser = null;
let audioFile = null;
let svgVisualisation = null;
let buttonGroup = null;
let playPauseButton = null;

class AudioFrequencies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  componentDidMount() {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    audioFile = document.getElementById('audio-file');
    const source = context.createMediaElementSource(audioFile);
    analyser = context.createAnalyser();

    source.connect(analyser);
    source.connect(context.destination);

    audioFile.src = 'https://barbarous-falcon.s3.eu-west-2.amazonaws.com/resources/music/i_wont_lock_it_down.mp3';
    audioFile.crossOrigin = 'anonymous';

    const postContainerWidth = document.getElementById('visualisation').clientWidth;
    const dimension = postContainerWidth * 0.65;

    svgVisualisation = d3.select('#visualisation')
      .attr('class', 'text-center py-3')
      .append('svg')
      .attr('width', dimension)
      .attr('height', dimension)
      .append('g');

    buttonGroup = svgVisualisation
      .append('g')
      .attr('transform', `translate(${(dimension / 2) - 15}, ${(dimension / 2) - 15})`);

    playPauseButton = buttonGroup
      .append('svg:image')
      .attr('id', 'play-button')
      .attr('xlink:href', iconPlay)
      .attr('width', 30)
      .attr('height', 30)
      .style('cursor', 'pointer');
  }

  componentDidUpdate() {
    const { isPlaying } = this.state;
    const frequencyData = new Uint8Array(200);
    const postContainerWidth = document.getElementById('visualisation').clientWidth;
    const dimension = postContainerWidth * 0.65;

    d3.select('#play-audio').on('click', () => {
      if (!isPlaying) {
        playPauseButton
          .attr('xlink:href', iconPause);
        audioFile.play();

        this.setState({
          isPlaying: !isPlaying,
        });
      }
    });

    buttonGroup.on('click', () => {
      playPauseButton.attr('xlink:href', null);

      if (isPlaying) {
        playPauseButton
          .attr('xlink:href', iconPlay);
        audioFile.pause();
      } else {
        playPauseButton
          .attr('xlink:href', iconPause);
        audioFile.play();
      }

      this.setState({
        isPlaying: !isPlaying,
      });
    });

    function drawPaths(audioFrequencies) {
      // Number of frequencies
      const total = audioFrequencies[0].length;

      // Ensure only one instance of the paths
      d3.selectAll('.happy_path').remove();

      audioFrequencies.forEach((frequency) => {
        const pathOne = [];
        const pathTwo = [];
        const pathThree = [];
        const pathFour = [];
        const pathFive = [];

        // Lazy inefficient code to make 5 closed paths
        svgVisualisation
          .selectAll('.nodes')
          .data(frequency, (value, index) => {
            pathOne.push([
              dimension / 2 * (1 - (parseFloat(Math.max(value, 0)) / dimension)
                * Math.sin(index * 2 * Math.PI / total)),
              dimension / 2 * (1 - (parseFloat(Math.max(value, 0)) / dimension)
                * Math.cos(index * 2 * Math.PI / total)),
            ]);

            pathTwo.push([
              dimension / 2 * (1 - (parseFloat(Math.max(value, 0)) / dimension)
                * 1.25 * Math.sin(index * 2 * Math.PI / total)),
              dimension / 2 * (1 - (parseFloat(Math.max(value, 0)) / dimension)
                * 1.25 * Math.cos(index * 2 * Math.PI / total)),
            ]);

            pathThree.push([
              dimension / 2 * (1 - (parseFloat(Math.max(value, 0)) / dimension)
                * 1.5 * Math.sin(index * 2 * Math.PI / total)),
              dimension / 2 * (1 - (parseFloat(Math.max(value, 0)) / dimension)
                * 1.5 * Math.cos(index * 2 * Math.PI / total)),
            ]);

            pathFour.push([
              dimension / 2 * (1 - (parseFloat(Math.max(value, 0)) / dimension)
                * 1.75 * Math.sin(index * 2 * Math.PI / total)),
              dimension / 2 * (1 - (parseFloat(Math.max(value, 0)) / dimension)
                * 1.75 * Math.cos(index * 2 * Math.PI / total)),
            ]);

            pathFive.push([
              dimension / 2 * (1 - (parseFloat(Math.max(value, 0)) / dimension)
                * 2 * Math.sin(index * 2 * Math.PI / total)),
              dimension / 2 * (1 - (parseFloat(Math.max(value, 0)) / dimension)
                * 2 * Math.cos(index * 2 * Math.PI / total)),
            ]);
          });

        pathOne.push(pathOne[0]);
        pathTwo.push(pathTwo[0]);
        pathThree.push(pathThree[0]);
        pathFour.push(pathFour[0]);
        pathFive.push(pathFive[0]);

        const lineFunctionCurvy = d3.line()
          .x(d => d[0])
          .y(d => d[1])
          .curve(d3.curveBasis);

        svgVisualisation.append('path')
          .attr('d', lineFunctionCurvy(pathFive))
          .attr('stroke', '#212121');

        svgVisualisation.append('path')
          .attr('d', lineFunctionCurvy(pathOne))
          .attr('stroke', '#F1FF38');

        svgVisualisation.append('path')
          .attr('d', lineFunctionCurvy(pathTwo))
          .attr('stroke', '#016EFF');

        svgVisualisation.append('path')
          .attr('d', lineFunctionCurvy(pathThree))
          .attr('stroke', '#00FFBF');

        svgVisualisation.append('path')
          .attr('d', lineFunctionCurvy(pathFour))
          .attr('stroke', '#FF0A43');

        svgVisualisation.selectAll('path')
          .attr('class', 'happy_path')
          .attr('stroke-width', 2)
          .attr('fill', 'none');
      });
    }

    function renderChart() {
      requestAnimationFrame(renderChart);
      analyser.getByteFrequencyData(frequencyData);

      const finalData = [];

      // Pick only one in four frequencies (don't need that many for the circles)
      frequencyData.forEach((value, index) => {
        if (index % 4 === 0) {
          if (value < 65) frequencyData[index] = value + 65;
          finalData.push(frequencyData[index]);
        }
      });

      drawPaths([finalData]);
    }

    renderChart();
  }

  render() {
    return (
      <div>
        <p>
          Here&apos;s a fun song -
          <i>I Won&apos;t Lock It Down</i>
          {' '}
          by Jonathan Mann.
          {' '}
          <b id="play-audio" style={{ cursor: 'pointer' }}>Play</b>
          {' '}
          it!
        </p>

        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio id="audio-file" src="https://www.vathsav.com/download/i_wont_lock_it_down.mp3" />
        <div id="visualisation" />
      </div>
    );
  }
}

export default AudioFrequencies;
