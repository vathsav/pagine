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


class PortfolioContainer extends Component {
  render() {
    const { firestoreReducer } = this.props;
    const { portfolio } = firestoreReducer.data;

    return (
      <div>
        {!portfolio
          && <Loader color="cyan" />
        }

        {portfolio
          && (
            <Container fluid className="bg-cyan-light px-0">
              <Header color="green" />

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
    { collection: 'portfolio' },
  ]),
)(PortfolioContainer);
