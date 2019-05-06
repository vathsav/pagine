import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Components
import About from './about';
import Contact from './contact';
import Introduction from './introduction';


class Home extends Component {
  render() {
    const { content, weather } = this.props;

    return (
      <div>
        <Introduction content={content.intro} weather={weather} />

        <About content={content.about} />

        <Container>
          <Contact />
        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  content: PropTypes.object.isRequired,
  weather: PropTypes.object,
};

Home.defaultProps = {
  weather: {},
};

export default Home;
