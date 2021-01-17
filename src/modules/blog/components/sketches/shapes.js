import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';

class SketchShapes extends Component {
  render() {
    function sketchShapes(processing) {
      let cube;
      let pyramid;
      let cuboid;
      let star;

      // eslint-disable-next-line no-param-reassign
      processing.setup = function () {
        processing.createCanvas(500, 600, processing.WEBGL);
        cube = false;
        pyramid = false;
        cuboid = false;
        star = false;
      };

      function displayInterface() {
        processing.background(33, 33, 33);
        processing.stroke(245, 245, 245);
        processing.strokeWeight(5);
        processing.line(processing.width / 7, 0, processing.width / 7, processing.height);
        processing.line(0, processing.height / 4, processing.width / 7, processing.height / 4);
        processing.line(0, 2 * (processing.height / 4), processing.width / 7, 2 * (processing.height / 4));
        processing.line(0, 3 * (processing.height / 4), processing.width / 7, 3 * (processing.height / 4));
        processing.strokeWeight(1);
      }

      function displayShapes() {
        // cube
        processing.push();
        processing.translate(processing.width / 16, processing.height / 8);
        processing.fill(244, 67, 54);
        processing.box(50);
        processing.pop();
        // pyramid
        processing.push();
        processing.translate(processing.width / 16, 3 * (processing.height / 8), 0);
        processing.beginShape();
        processing.rotateY(1000);
        processing.scale(0.5);
        processing.fill(63, 81, 181);
        // vertex 1
        processing.vertex(-100, -100, -100);
        processing.vertex(100, -100, -100);
        processing.vertex(0, 0, 100);
        // vertex 2
        processing.vertex(100, -100, -100);
        processing.vertex(100, 100, -100);
        processing.vertex(0, 0, 100);
        // vertex 3
        processing.vertex(100, 100, -100);
        processing.vertex(-100, 100, -100);
        processing.vertex(0, 0, 100);
        // vertex 4
        processing.vertex(-100, 100, -100);
        processing.vertex(-100, -100, -100);
        processing.vertex(0, 0, 100);
        processing.endShape();
        processing.pop();
        // cuboid
        processing.push();
        processing.translate(processing.width / 16, 5 * (processing.height / 8));
        processing.fill(205, 220, 57);
        processing.box(100, 50, 20);
        processing.pop();
        // star
        processing.push();
        processing.translate(processing.width / 16, 7 * (processing.height / 8));
        processing.fill(255, 193, 7);
        processing.beginShape();
        processing.vertex(0, -50);
        processing.vertex(14, -20);
        processing.vertex(47, -15);
        processing.vertex(23, 7);
        processing.vertex(29, 40);
        processing.vertex(0, 25);
        processing.vertex(-29, 40);
        processing.vertex(-23, 7);
        processing.vertex(-47, -15);
        processing.vertex(-14, -20);
        processing.endShape();
        processing.pop();
      }

      function shapeSelected() {
        if (processing.mouseX >= 0
            && processing.mouseX <= processing.width / 8 && processing.mouseY >= 0
          && processing.mouseY <= processing.height / 4) {
          cube = true;
          pyramid = false;
          cuboid = false;
          star = false;
        } else if (processing.mouseX >= 0
            && processing.mouseX <= processing.width / 8 && processing.mouseY >= processing.height / 4
          && processing.mouseY <= 2 * (processing.height / 4)) {
          cube = false;
          pyramid = true;
          cuboid = false;
          star = false;
        } else if (processing.mouseX >= 0
            && processing.mouseX <= processing.width / 8 && processing.mouseY >= 2 * (processing.height / 4)
          && processing.mouseY <= 3 * (processing.height / 4)) {
          cube = false;
          pyramid = false;
          cuboid = true;
          star = false;
        } else if (processing.mouseX >= 0
            && processing.mouseX <= processing.width / 8 && processing.mouseY >= 3 * (processing.height / 4)
          && processing.mouseY <= 4 * (processing.height / 4)) {
          cube = false;
          pyramid = false;
          cuboid = false;
          star = true;
        }
      }

      function drawShape() {
        if (cube) {
          processing.push();
          processing.fill(244, 67, 54, 127);
          processing.translate(processing.mouseX, processing.mouseY);
          processing.rotateX(processing.mouseX * 0.01);
          processing.rotateY(processing.mouseY * 0.01);
          processing.lights();
          processing.box(150);
          processing.pop();
        } else if (pyramid) {
          processing.push();
          processing.fill(63, 81, 181, 127);
          processing.translate(processing.mouseX, processing.mouseY);
          processing.rotateX(processing.mouseX * 0.01);
          processing.rotateY(processing.mouseY * 0.01);
          processing.lights();
          processing.beginShape();
          processing.vertex(-100, -100, -100);
          processing.vertex(100, -100, -100);
          processing.vertex(0, 0, 100);

          processing.vertex(100, -100, -100);
          processing.vertex(100, 100, -100);
          processing.vertex(0, 0, 100);

          processing.vertex(100, 100, -100);
          processing.vertex(-100, 100, -100);
          processing.vertex(0, 0, 100);

          processing.vertex(-100, 100, -100);
          processing.vertex(-100, -100, -100);
          processing.vertex(0, 0, 100);
          processing.endShape();
          processing.pop();
        } else if (cuboid) {
          processing.push();
          processing.fill(205, 220, 57, 127);
          processing.translate(processing.mouseX, processing.mouseY);
          processing.rotateX(processing.mouseX * 0.01);
          processing.rotateY(processing.mouseY * 0.01);
          processing.lights();
          processing.box(100, 50, 20);
          processing.pop();
        } else if (star) {
          processing.push();
          processing.fill(255, 193, 7, 127);
          processing.translate(processing.mouseX, processing.mouseY);
          processing.rotateX(processing.mouseX * 0.01);
          processing.rotateY(processing.mouseY * 0.01);
          processing.lights();
          processing.beginShape();
          processing.vertex(0, -50);
          processing.vertex(14, -20);
          processing.vertex(47, -15);
          processing.vertex(23, 7);
          processing.vertex(29, 40);
          processing.vertex(0, 25);
          processing.vertex(-29, 40);
          processing.vertex(-23, 7);
          processing.vertex(-47, -15);
          processing.vertex(-14, -20);
          processing.endShape();
          processing.pop();
        }
      }

      // eslint-disable-next-line no-param-reassign
      processing.draw = function () {
        displayInterface();
        displayShapes();
        shapeSelected();
        drawShape();
      };
    }

    return (
      <P5Wrapper sketch={sketchShapes} />
    );
  }
}

export default SketchShapes;
