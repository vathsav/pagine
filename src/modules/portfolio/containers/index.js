import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PropTypes from 'prop-types';

// Components
import Footer from '../../footer/component';
import Header from '../../header/component';
import Loader from '../../loader';
import Portfolio from '../components';

// Utils
import { FIRESTORE_COLLECTION_PORTFOLIO } from '../../../utils/constants';


class PortfolioContainer extends Component {
  render() {
    const { firestoreReducer } = this.props;
    const { portfolio } = firestoreReducer.data;

    return (
      <div>
        {!portfolio
          && <Loader color="yellow" />
        }

        {portfolio
          && (
            <Container fluid className="main bg-yellow-light px-0">
              <Header color="yellow" />

              <Portfolio items={portfolio} />

              <Footer />
            </Container>
          )
        }
      </div>
    );
  }
}

PortfolioContainer.propTypes = {
  firestoreReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: FIRESTORE_COLLECTION_PORTFOLIO },
  ]),
)(PortfolioContainer);
