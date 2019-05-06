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
import Home from '../components';
import Header from '../../header/component';


class HomeContainer extends Component {
  componentDidMount() {
    const { getWeatherReport } = this.props;
    getWeatherReport();
  }

  render() {
    const { firestoreReducer, weatherReducer } = this.props;
    const { content } = firestoreReducer.data;

    return (
      <Container fluid className="bg-red-light px-0">
        <Header color="red" />

        <div className="overflow-hidden">

          {/* TODO handle content.home being null? */}
          {content
            && <Home content={content.home} weather={weatherReducer} />
          }

          {!content
            && <div>LOADING</div>
          }
        </div>

        <Footer />
      </Container>
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
    { collection: 'content' },
  ]),
)(HomeContainer);
