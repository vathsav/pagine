import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Components
import SkylineAnimation from './skyline/index';


class Introduction extends Component {
  render() {
    const { content, weather } = this.props;

    return (
      <Row>
        <Col sm={12} lg={6}>
          <div className="title-large text-uppercase font-weight-bold">
            Hello, you.
          </div>

          {/* TODO: Move the skyline to the index? */}
          {/*<SkylineAnimation weather={weather.weather} />*/}
        </Col>

        <Col sm={12} lg={6} className="content-medium">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Col>
      </Row>
    );
  }
}

Introduction.propTypes = {
  content: PropTypes.string.isRequired,
  weather: PropTypes.object,
};

Introduction.defaultProps = {
  weather: {},
};

export default Introduction;
