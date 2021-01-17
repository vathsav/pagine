import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

// Utils
import {
  FIRESTORE_COLLECTION_POSTS,
  FIRESTORE_COLLECTION_TAGS,
  READ_TIME_WORDS_PER_MINUTE,
} from '../../../utils/constants';
import { getWordCount } from '../../../utils/helper';

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: '',
      content: '',
      image: '',
      isPublished: false,
      slug: '',
      postTags: [null, null, null],
      timeToRead: 0,
      title: '',
    };

    this.createPost = this.createPost.bind(this);
  }

  createPost() {
    const { firestore } = this.props;
    const {
      caption, content, image, isPublished, slug, postTags, timeToRead, title,
    } = this.state;

    firestore.collection(FIRESTORE_COLLECTION_POSTS).doc(slug.toLowerCase()).set({
      caption,
      content,
      image,
      isPublished,
      tags: postTags,
      timeToRead,
      timestamp: Date.now(),
      title,
    })
      .then(() => {
        // TODO: Create popups
        console.log('Post created successfully!');
      })
      .catch((error) => {
        // TODO: Create popups
        console.error('Error creating post: ', error);
      });
  }

  render() {
    const { firestoreReducer } = this.props;
    const { content } = this.state;
    const previewTextContent = document.getElementById('preview');

    const { tags } = firestoreReducer.data;
    const tagSelectors = [];

    if (tags && Object.keys(tags).length) {
      Object.keys(tags).forEach((tag) => {
        tagSelectors.push(
          <option key={tag} value={tag}>{tags[tag].name}</option>,
        );
      });
    }

    return (
      <Container fluid>
        <Row>
          <Col sm={12} md={6} className="card">
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
              <div className="title-small">Is Published</div>
              <input
                type="checkbox"
                onChange={((event) => {
                  this.setState({
                    isPublished: event.target.checked,
                  });
                })}
              />
            </Row>

            <Row>
              <div className="title-small">Caption</div>
              <input
                type="text"
                onChange={((event) => {
                  this.setState({
                    caption: event.target.value,
                  });
                })}
              />
            </Row>

            <div className="title-small">Content</div>

            <Row>
              <Col sm={12} md={6}>
                <textarea
                  className="w-100"
                  rows={10}
                  placeholder="Post Content"
                  onChange={((event) => {
                    this.setState({
                      content: event.target.value,
                      // eslint-disable-next-line max-len
                      timeToRead: previewTextContent ? Math.round(getWordCount(previewTextContent.textContent) / READ_TIME_WORDS_PER_MINUTE) : 1,
                    });
                  })}
                />
              </Col>
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

            {tags && (
              <Row>
                <div className="title-small">Tags</div>

                <select onChange={
                  ((event) => {
                    const { postTags } = this.state;
                    this.setState({
                      postTags: [event.target.value, postTags[1], postTags[2]],
                    });
                  })
                }
                >
                  <option>Choose</option>
                  {tagSelectors}
                </select>

                <select onChange={
                  ((event) => {
                    const { postTags } = this.state;
                    this.setState({
                      postTags: [postTags[0], event.target.value, postTags[2]],
                    });
                  })
                }
                >
                  <option>Choose</option>
                  {tagSelectors}
                </select>

                <select onChange={
                  ((event) => {
                    const { postTags } = this.state;
                    this.setState({
                      postTags: [postTags[0], postTags[1], event.target.value],
                    });
                  })
                }
                >
                  <option>Choose</option>
                  {tagSelectors}
                </select>
              </Row>
            )}

            <Row>
              <div className="title-small">Post Slug</div>
              <input
                type="text"
                onChange={((event) => {
                  this.setState({
                    slug: event.target.value,
                  });
                })}
              />
            </Row>

            <button type="submit" onClick={this.createPost}>
              Create
            </button>
          </Col>

          <Col sm={12} md={6} className="card">
            <div id="preview" dangerouslySetInnerHTML={{ __html: content }} />
          </Col>
        </Row>
      </Container>
    );
  }
}

AddPost.propTypes = {
  firestore: PropTypes.object.isRequired,
  firestoreReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => state;

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    FIRESTORE_COLLECTION_TAGS,
  ]),
)(AddPost);
