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
// import PostTimeline from '../components/post-timeline';
import Sidebar from '../components/sidebar';
import { PageView } from '../../tracking';

// Utils
import {
  FIRESTORE_COLLECTION_CONTENT,
  FIRESTORE_COLLECTION_POSTS,
  FIRESTORE_COLLECTION_TAGS,
  URL_BLOG_CATEGORY,
} from '../../../utils/constants';

class BlogListContainer extends Component {
  componentDidMount() {
    PageView();
  }

  render() {
    const { firestoreReducer, match } = this.props;
    const { content, posts, tags } = firestoreReducer.data;
    let selectedPosts = JSON.parse(JSON.stringify(posts || {}));

    if (tags && match.path === URL_BLOG_CATEGORY) {
      const categoryTag = match.params[0];

      let isValidTag = false;
      let categoryTagKey = null;

      Object.keys(tags).forEach((key) => {
        if (tags[key].slug === categoryTag) {
          isValidTag = true;
          categoryTagKey = key;
        }
      });

      if (isValidTag) {
        Object.keys(selectedPosts).forEach((slug) => {
          const postTags = selectedPosts[slug].tags;

          if (postTags && !postTags.includes(categoryTagKey)) {
            delete selectedPosts[slug];
          }
        });
      } else {
        selectedPosts = null;
      }
    }

    return (
      <div>
        {(!selectedPosts || !content) // && !categories
          && <Loader color="blue" />}

        {selectedPosts && content // && categories
          && (
            <Container fluid className="main bg-blue-light px-0">
              <Header color="blue" />

              <Container>
                <Row>
                  {/* <Col xs={0} md={0} id="timeline-wrapper" className="d-none d-md-block"> */}
                  {/* <PostTimeline numberOfPosts={Object.keys(selectedPosts).length} /> */}
                  {/* </Col> */}

                  <Col xs={12} md={9}>
                    <PostList posts={selectedPosts} tags={tags} />
                  </Col>

                  <Col xs={12} md={3}>
                    <Sidebar content={content.blog} tags={tags} />
                  </Col>
                </Row>
              </Container>

              <Footer />
            </Container>
          )}
      </div>
    );
  }
}

BlogListContainer.propTypes = {
  firestoreReducer: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => state;

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: FIRESTORE_COLLECTION_POSTS, orderBy: [['timestamp', 'desc']] },
    FIRESTORE_COLLECTION_CONTENT,
    FIRESTORE_COLLECTION_TAGS,
  ]),
)(BlogListContainer);
