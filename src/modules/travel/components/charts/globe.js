import React, { Component } from 'react';
import * as d3 from 'd3';


class Globe extends Component {
  componentDidMount() {
    const { versor } = window;
    const { topojson } = window;

    const angles = ['λ', 'φ', 'γ'];

    // angles.forEach((angle, index) => {
    //   d3.select('#rotation').append('div')
    //     .attr('class', `angle-label angle-label-${index}`)
    //     .html(`${angle}: <span>0</span>`);
    //
    //   d3.select('#globe').append('input')
    //     .attr('type', 'range')
    //     .attr('class', `angle angle-${index}`)
    //     .attr('min', '-180')
    //     .attr('max', '180')
    //     .attr('step', '1')
    //     .attr('value', '0');
    // });

    const width = 350;
    const height = 350;

    const svg = d3.select('#globe').append('svg')
      .attr('width', width)
      .attr('height', height);

    const projection = d3.geoOrthographic()
      .scale(d3.min([width / 2, height / 2]))
      .translate([width / 2, height / 2])
      .precision(1);

    const path = d3.geoPath()
      .projection(projection);


    let v0; // Mouse position in Cartesian coordinates at start of drag gesture.
    let r0; // Projection rotation as Euler angles at start.
    let q0; // Projection rotation as versor at start.

    // const graticule = d3.geoGraticule()
    // .step([1, 1]);

    // svg.append('path')
    //   .datum(graticule)
    //   .attr('class', 'graticule')
    //   .attr('d', path);

    svg.append('path')
      .datum({ type: 'Sphere' })
      .attr('class', 'water')
      .attr('d', path);

    function update(eulerAngles) {
      angles.forEach((angle, index) => {
        d3.select(`.angle-label-${index} span`).html(Math.round(eulerAngles[index]));
        d3.select(`.angle-${index}`).property('value', eulerAngles[index]);
      });

      projection.rotate(eulerAngles);
    }

    function dragStarted() {
      const mousePos = d3.mouse(this);

      v0 = versor.cartesian(projection.invert(mousePos));
      r0 = projection.rotate();
      q0 = versor(r0);

      svg.insert('path')
        .datum({ type: 'Point', coordinates: projection.invert(mousePos) })
        .attr('class', 'point point-mouse')
        .attr('d', path);
    }

    function dragged() {
      const mousePos = d3.mouse(this);

      const v1 = versor.cartesian(projection.rotate(r0).invert(mousePos));
      const q1 = versor.multiply(q0, versor.delta(v0, v1));
      const r1 = versor.rotation(q1);

      if (r1) {
        update(r1);

        svg.selectAll('path').attr('d', path);

        svg.selectAll('.point-mouse')
          .datum({ type: 'Point', coordinates: projection.invert(mousePos) });
      }
    }

    function dragEnded() {
      svg.selectAll('.point').remove();
    }

    const drag = d3.drag()
      .on('start', dragStarted)
      .on('drag', dragged)
      .on('end', dragEnded);

    svg.call(drag);

    d3.selectAll('input').on('input', () => {
      // get all values
      const nums = [];
      d3.selectAll('input').each((d, i) => {
        nums.push(+d3.select(this).property('value'));
      });
      update(nums);
      //
      svg.selectAll('path').attr('d', path);
    });

    d3.json('https://barbarous-falcon.s3.eu-west-2.amazonaws.com/resources/countries.json')
      .then((countries) => {
        svg.selectAll('.country')
          .data(topojson.feature(countries, countries.objects.polygons).features)
          .enter().append('path')
          .attr('class', 'country')
          .attr('d', path);
      });
  }

  render() {
    return (
      <div id="globe" className="text-center py-5" />
    );
  }
}

export default Globe;
