import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

// Utils
import { FIRESTORE_COLLECTION_PORTFOLIO } from '../../../utils/constants';

class AddPortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      image: '',
      tags: [],
      title: '',
      isContribution: false,
      url: '',
    };

    this.createPortfolioItem = this.createPortfolioItem.bind(this);
  }

  createPortfolioItem() {
    const { firestore } = this.props;

    firestore.collection(FIRESTORE_COLLECTION_PORTFOLIO).add(this.state)
      .then(() => {
        // TODO Create popup
        // eslint-disable-next-line no-console
        console.log('Post created successfully!');
      })
      .catch((error) => {
        // TODO Create popup
        // eslint-disable-next-line no-console
        console.error('Error creating post: ', error);
      });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <div className="title-small">Title</div>

          <input
            type="text"
            onChange={((event) => {
              this.setState({
                title: event.target.value,
              });
            })}
          />
        </Row>

        <Row>
          <div className="title-small">Description</div>
          <input
            type="text"
            onChange={((event) => {
              this.setState({
                description: event.target.value,
              });
            })}
          />
        </Row>

        <Row>
          <div className="title-small">Image</div>
          <input
            type="text"
            onChange={((event) => {
              this.setState({
                image: event.target.value,
              });
            })}
          />
        </Row>

        <Row>
          <div className="title-small">Tags</div>
          <input
            type="text"
            onChange={((event) => {
              this.setState({
                tags: event.target.value,
              });
            })}
          />
        </Row>

        <Row>
          <div className="title-small">URL</div>
          <input
            type="text"
            onChange={((event) => {
              this.setState({
                url: event.target.value,
              });
            })}
          />
        </Row>

        <Row>
          <div className="title-small">is_contribution</div>
          <input
            type="checkbox"
            onChange={((event) => {
              this.setState({
                isContribution: event.target.checked,
              });
            })}
          />
        </Row>

        <button type="submit" onClick={this.createPortfolioItem}>
          Create
        </button>
      </Container>
    );
  }
}

AddPortfolioItem.propTypes = {
  firestore: PropTypes.object.isRequired,
};

export default firestoreConnect()(AddPortfolioItem);
