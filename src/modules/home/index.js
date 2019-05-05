import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';

// Components
import { firestoreConnect } from 'react-redux-firebase';
import Home from './components';
import Header from '../header/component';
import Footer from '../footer/component';

// Actions
import actionFetchHomepageContent from './actions';

class HomeContainer extends Component {
  componentDidMount() {
    const { fetchHomepageContent } = this.props;
    fetchHomepageContent();
  }

  render() {
    const { firestoreReducer } = this.props;
    const { content } = firestoreReducer.data;

    return (
      <Container fluid className="bg-red-light">
        <Header />

        {firestoreReducer.data.content
        && <Home content={content.home} />
        }

        {!firestoreReducer.data.content
        && <div>LOADING</div>
        }

        <Footer />
      </Container>
    );
  }
}

HomeContainer.propTypes = {
  fetchHomepageContent: PropTypes.func.isRequired,
  homeReducer: PropTypes.object.isRequired,
  firestoreReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;

const mapActionsToProps = dispatch => bindActionCreators({
  fetchHomepageContent: actionFetchHomepageContent,
}, dispatch);

export default compose(
  connect(mapStateToProps, mapActionsToProps),
  firestoreConnect([
    { collection: 'content' },
  ]),
)(HomeContainer);
