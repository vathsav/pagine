import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

// Utils
import { FIRESTORE_COLLECTION_TAGS } from '../../../utils/constants';

class AddTag extends Component {
  constructor(props) {
    super(props);

    // TODO: Maybe remove 'add' stuff from the sidebar and include a 'plus' icon in their respective view sections
    this.state = {
      description: '',
      name: '',
      slug: '',
    };

    this.createPortfolioItem = this.createPortfolioItem.bind(this);
  }

  createPortfolioItem() {
    const { firestore } = this.props;

    firestore.collection(FIRESTORE_COLLECTION_TAGS).add(this.state)
      .then(() => {
        // TODO: Create popups
        console.log('Tag created successfully!');
      })
      .catch((error) => {
        // TODO: Create popups
        console.error('Error creating tag: ', error);
      });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <div className="title-small">Name</div>

          <input
            type="text"
            onChange={((event) => {
              this.setState({
                name: event.target.value,
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
          <div className="title-small">Slug</div>
          <input
            type="text"
            onChange={((event) => {
              this.setState({
                slug: event.target.value,
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

AddTag.propTypes = {
  firestore: PropTypes.object.isRequired,
};

export default firestoreConnect()(AddTag);
