import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

// Components
import About from './about';
import Contact from './contact';
import Introduction from './introduction';

class Home extends Component {
  render() {
    const { content } = this.props;

    return (
      <div>
        <Introduction content={content.intro} />

        <About content={content.about} />

        <Container>
          <Contact />
        </Container>
      </div>
    );
  }
}

export default Home;
