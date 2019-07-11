import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';


class SketchSolitaire extends Component {
  render() {
    function sketchSolitaire(processing) {
      processing.setup = function () {
        processing.createCanvas(225, 225);
        processing.background(33, 33, 33);
      };

      processing.draw = function () {
        processing.fill(205, 220, 57);
        processing.rect(processing.mouseX - 25, processing.mouseY - 25, 50, 50);
      };
    }

    return (
      <P5Wrapper sketch={sketchSolitaire} />
    );
  }
}

export default SketchSolitaire;
