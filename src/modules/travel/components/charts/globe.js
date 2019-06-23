import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';


class Globe extends Component {
  componentDidMount() {
    const globeConfig = {
      speed: 0.0025,
      verticalTilt: -20,
      horizontalTilt: 0,
    };

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

    // const graticule = d3.geoGraticule()
    //   .step([10, 10]);
    //
    // svg.append('path')
    //   .datum(graticule)
    //   .attr('class', 'graticule')
    //   .attr('d', path);

    svg.append('path')
      .datum({ type: 'Sphere' })
      .attr('class', 'water')
      .attr('d', path);

    d3.timer((elapsed) => {
      projection.rotate([globeConfig.speed * elapsed - 60, globeConfig.verticalTilt, globeConfig.horizontalTilt]);
      svg.selectAll('path').attr('d', path);
    });

    d3.json('https://barbarous-falcon.s3.eu-west-2.amazonaws.com/resources/countries.json')
      .then((countries) => {
        const countriesVisited = [
          'India',
          'Italy',
          'Switzerland',
          'Romania',
          'Denmark',
          'Sweden',
          'France',
          'Poland',
          'Finland',
          'Netherlands',
          'United States of America',
          'Germany',
          'Croatia',
          'Slovenia',
          'Holy See (Vatican City)',
        ];

        svg.selectAll('.country')
          .data(topojson.feature(countries, countries.objects.polygons).features)
          .enter().append('path')
          .attr('class', (d) => {
            if (countriesVisited.includes(d.properties.name)) {
              return 'country-visited';
            }

            return 'country';
          })
          .attr('d', path)
          .on('mouseover', (d) => {
            d3.select(d3.event.target).attr('class', 'country-hovered');
          })
          .on('mouseout', (d) => {
            if (countriesVisited.includes(d.properties.name)) {
              d3.select(d3.event.target).attr('class', 'country-visited');
            } else {
              d3.select(d3.event.target).attr('class', 'country');
            }
          });
      });
  }

  render() {
    return (
      <div id="globe" className="text-center py-5" />
    );
  }
}

export default Globe;
