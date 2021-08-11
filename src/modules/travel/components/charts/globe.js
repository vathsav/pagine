import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import PropTypes from 'prop-types';

class Globe extends Component {
  componentDidMount() {
    const { countriesVisited } = this.props;

    const globeConfig = {
      speed: 0.0025,
      verticalTilt: -20,
      horizontalTilt: 0,
    };

    const height = 350;
    const width = 350;

    const svg = d3.select('#globe').append('svg')
      .attr('height', height)
      .attr('width', width);

    const projection = d3.geoOrthographic()
      .scale(d3.min([width / 2, height / 2]))
      .translate([width / 2, height / 2])
      .precision(1);

    const path = d3.geoPath()
      .projection(projection);

    svg.append('path')
      .datum({ type: 'Sphere' })
      .attr('class', 'water')
      .attr('d', path);

    d3.timer((elapsed) => {
      projection.rotate([globeConfig.speed * elapsed - 60, globeConfig.verticalTilt, globeConfig.horizontalTilt]);
      svg.selectAll('path').attr('d', path);
    });

    d3.json('https://media.vathsav.com/resources/countries.json')
      .then((countries) => {
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
            if (!countriesVisited.includes(d.properties.name)) {
              d3.select(d3.event.target).attr('class', 'country-hovered');
            }
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

  componentWillUnmount() {
    d3.selectAll('#globe svg').remove();
  }

  render() {
    return (
      <div id="globe" className="text-center py-5" />
    );
  }
}

Globe.propTypes = {
  countriesVisited: PropTypes.array,
};

Globe.defaultProps = {
  countriesVisited: [],
};

export default Globe;
