import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PropTypes from 'prop-types';

// Components
import Portfolio from '../components';
import Footer from '../../footer/component';
import Header from '../../header/component';


class PortfolioContainer extends Component {
  render() {
    const { firestoreReducer } = this.props;
    const { portfolio } = firestoreReducer.data;

    return (
      <Container fluid className="bg-cyan-light">
        <Header color="green" />


        {/* TODO handle content.home being null? */}
        {portfolio
        && <Portfolio items={portfolio} />
        }

        {!portfolio
        && <div>LOADING</div>
        }

        <Footer />
      </Container>
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
