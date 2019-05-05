import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PropTypes from 'prop-types';

// Components
import Footer from '../../footer/component';
import Home from '../components';
import Header from '../../header/component';


class HomeContainer extends Component {
  render() {
    const { firestoreReducer } = this.props;
    const { content } = firestoreReducer.data;

    return (
      <Container fluid className="bg-red-light">
        <Header color="red" />

        {/* TODO handle content.home being null? */}
        {content
        && <Home content={content.home} />
        }

        {!content
        && <div>LOADING</div>
        }

        <Footer />
      </Container>
    );
  }
}

HomeContainer.propTypes = {
  firestoreReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'content' },
  ]),
)(HomeContainer);
