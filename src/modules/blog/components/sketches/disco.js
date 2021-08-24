import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';

class SketchDisco extends Component {
  render() {
    function sketchSolitaire(processing) {
      let r;
      let g;
      let b;

      // eslint-disable-next-line no-param-reassign
      processing.setup = () => {
        processing.createCanvas(225, 225, processing.WEBGL);
        processing.frameRate(30);
      };

      // eslint-disable-next-line no-param-reassign
      processing.draw = () => {
        r = processing.random(255);
        g = processing.random(255);
        b = processing.random(255);
        processing.background(33, 33, 33);
        processing.fill(r, g, b);
        processing.translate(processing.mouseX - 100, processing.mouseY - 100);
        processing.rotateX(processing.mouseX * 0.01);
        processing.rotateY(processing.mouseY * 0.01);
        processing.lights();
        processing.box(50);
      };
    }

    return (
      <P5Wrapper sketch={sketchSolitaire} />
    );
  }
}

export default SketchDisco;
