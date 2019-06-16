import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PropTypes from 'prop-types';

// Actions
import fetchWeatherReport from '../actions/fetch-weather';

// Components
import Footer from '../../footer/component';
import Header from '../../header/component';
import Home from '../components';
import Loader from '../../loader';

// Utils
import { FIRESTORE_COLLECTION_CONTENT } from '../../../utils/constants';


class HomeContainer extends Component {
  componentDidMount() {
    const { getWeatherReport } = this.props;
    getWeatherReport();
  }

  render() {
    const { firestoreReducer, weatherReducer } = this.props;
    const { content } = firestoreReducer.data;

    return (
      <div>
        {!content
          && <Loader color="red" />
        }

        {content
          && (
            <Container fluid className="main bg-red-light px-0">
              <Header color="red" />

              <Home content={content.home} weather={weatherReducer} />

              <Footer />
            </Container>
          )
        }
      </div>
    );
  }
}

HomeContainer.propTypes = {
  firestoreReducer: PropTypes.object.isRequired,
  getWeatherReport: PropTypes.func.isRequired,
  weatherReducer: PropTypes.object,
};

HomeContainer.defaultProps = {
  weatherReducer: {},
};

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getWeatherReport: fetchWeatherReport,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: FIRESTORE_COLLECTION_CONTENT },
  ]),
)(HomeContainer);
