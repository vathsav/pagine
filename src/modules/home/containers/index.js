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
import { PageView } from '../../tracking';

// Utils
import { FIRESTORE_COLLECTION_CONTENT } from '../../../utils/constants';
import PopupSubmit from '../../popups/contact-submit';


class HomeContainer extends Component {
  constructor(props) {
    super(props);

    // TODO: Refactor these long keys
    this.state = {
      isContactFormSubmitted: false,
      isContactFormSubmittedSuccessfully: false,
    };

    this.contactFormSubmitted = this.contactFormSubmitted.bind(this);
  }

  componentDidMount() {
    const { getWeatherReport } = this.props;
    getWeatherReport();

    PageView();
  }

  contactFormSubmitted(success, open) {
    this.setState({
      isContactFormSubmitted: open,
      isContactFormSubmittedSuccessfully: success,
    });
  }

  render() {
    const { isContactFormSubmitted, isContactFormSubmittedSuccessfully } = this.state;

    const { firestoreReducer, weatherReducer } = this.props;
    const { content } = firestoreReducer.data;

    return (
      <div>
        {(!content || !weatherReducer.weather)
          && <Loader color="red" />
        }

        {(content && weatherReducer.weather)
          && (
            <div>
              {isContactFormSubmitted && (
                <PopupSubmit
                  success={isContactFormSubmittedSuccessfully}
                  contactFormSubmitted={this.contactFormSubmitted}
                />
              )}

              <Container fluid className="main bg-red-light px-0">
                <Header color="red" />

                <div className="overflow-hidden">
                  <Home
                    content={content.home}
                    weather={weatherReducer}
                    contactFormSubmitted={this.contactFormSubmitted}
                  />
                </div>

                <Footer />
              </Container>
            </div>
          )
        }
      </div>
    );
  }
}

HomeContainer.propTypes = {
  firestoreReducer: PropTypes.object.isRequired,
  getWeatherReport: PropTypes.func.isRequired,
  weatherReducer: PropTypes.object.isRequired,
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
