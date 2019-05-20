import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PropTypes from 'prop-types';

// Components
import Footer from '../../footer/component';
import Header from '../../header/component';
import Loader from '../../loader';
import PostList from '../components/list';
import PostTimeline from '../components/post-timeline';
import Sidebar from '../components/sidebar';

// Utils
import {
  FIRESTORE_COLLECTION_CONTENT,
  FIRESTORE_COLLECTION_POSTS,
  FIRESTORE_COLLECTION_TAGS,
} from '../../../utils/constants';


class BlogListContainer extends Component {
  render() {
    const { firestoreReducer } = this.props;
    const { content, posts } = firestoreReducer.data;

    return (
      <div>
        {(!posts || !content) // && !categories
          && <Loader color="blue" />
        }

        {posts && content // && categories
          && (
            <Container fluid className="bg-blue-light px-0">
              <Header color="blue" />

              <Container>
                <Row>
                  <Col md={1} id="timeline-wrapper">
                    <PostTimeline numberOfPosts={Object.keys(posts).length} />
                  </Col>

                  <Col md={8}>
                    <PostList posts={posts} />
                  </Col>

                  <Col md={3}>
                    <Sidebar content={content.blog} />
                  </Col>
                </Row>
              </Container>

              <Footer />
            </Container>
          )
        }
      </div>
    );
  }
}

BlogListContainer.propTypes = {
  firestoreReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: FIRESTORE_COLLECTION_POSTS, orderBy: [['timestamp', 'desc']] },
    FIRESTORE_COLLECTION_CONTENT,
    FIRESTORE_COLLECTION_TAGS,
  ]),
)(BlogListContainer);
