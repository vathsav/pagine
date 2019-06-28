import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

// Components
import { Container } from 'react-bootstrap';
import TravelComponent from '../components';
import Header from '../../header/component';
import Footer from '../../footer/component';

// Utils
import {
  FIRESTORE_COLLECTION_CONTENT,
  FIRESTORE_COLLECTION_TRAVEL,
} from '../../../utils/constants';
import Loader from '../../loader';


class TravelContainer extends Component {
  render() {
    const { firestoreReducer } = this.props;
    const travelObject = firestoreReducer.data.travel;
    const travelContent = firestoreReducer.data.content;

    return (
      <div>
        {(!travelObject || !travelContent)
          && <Loader color="cyan" />
        }

        {travelObject && travelContent
          && (
            <Container fluid className="main bg-cyan-light px-0">
              <Header color="cyan" />

              <TravelComponent travel={travelObject} content={travelContent} />

              <Footer />
            </Container>
          )
        }
      </div>
    );
  }
}

TravelContainer.propTypes = {
  firestoreReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: FIRESTORE_COLLECTION_TRAVEL, orderBy: [['rank']] },
    { collection: FIRESTORE_COLLECTION_CONTENT },
  ]),
)(TravelContainer);
