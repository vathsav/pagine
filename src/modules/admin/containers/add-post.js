import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';


class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: '',
      content: '',
      disqusURL: '',
      image: '',
      isPublished: false,
      slug: '',
      tags: [],
      timeToRead: 0,
      timestamp: { seconds: 0, nanoseconds: 0 },
      title: '',
    };

    this.createPost = this.createPost.bind(this);
  }

  createPost() {
    const { firestore } = this.props;
    const {
      caption, content, disqusURL, image, isPublished, slug, tags, timeToRead, timestamp, title,
    } = this.state;

    firestore.collection('posts').doc(slug.toLowerCase()).set({
      caption, content, disqusURL, image, isPublished, tags, timeToRead, timestamp, title,
    })
      .then(() => {
        console.log('Post created successfully!');
      })
      .catch((error) => {
        console.error('Error creating post: ', error);
      });
  }

  render() {
    const { content } = this.state;

    console.log(this.state);

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
            {/* Fields */}
            <textarea
              className="w-100"
              rows={10}
              placeholder="Post Content"
              onChange={((event) => {
                this.setState({
                  content: event.target.value,
                });
              })}
            />
          </Col>

          <Col sm={12} md={6}>
            {/* Preview */}
            <div className="card w-100" dangerouslySetInnerHTML={{ __html: content }} />
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
          <div className="title-small">Timestamp</div>
          <input
            type="text"
            onChange={((event) => {
              this.setState({
                timestamp: event.target.value,
              });
            })}
          />
        </Row>

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

        <Row>
          <div className="title-small">Disqus URL</div>
          <input
            type="text"
            onChange={((event) => {
              this.setState({
                disqusURL: event.target.value,
              });
            })}
          />
        </Row>

        <button type="submit" onClick={this.createPost}>
          Create
        </button>
      </Container>
    );
  }
}

AddPost.propTypes = {
  firestore: PropTypes.object.isRequired,
};

export default firestoreConnect()(AddPost);
