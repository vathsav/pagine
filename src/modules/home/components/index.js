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
    const { contactFormSubmitted } = this.props;

    return (
      <div>
        <Container>
          <Introduction content={content.intro} weather={weather} />
        </Container>

        <About content={content.about} />

        <Container>
          <Contact contactFormSubmitted={contactFormSubmitted} />
        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  contactFormSubmitted: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired,
};

export default Home;
