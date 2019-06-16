import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PropTypes from 'prop-types';

// Components
import BlogPost from '../components/post';
import Footer from '../../footer/component';
import Header from '../../header/component';
import Loader from '../../loader';
import Sidebar from '../components/sidebar';

// Utils
import {
  FIRESTORE_COLLECTION_CONTENT,
  FIRESTORE_COLLECTION_POSTS,
  FIRESTORE_COLLECTION_TAGS,
} from '../../../utils/constants';


class BlogPostContainer extends Component {
  render() {
    const { firestoreReducer, match } = this.props;
    const { content, posts, tags } = firestoreReducer.data;

    return (
      <div>
        {/* TODO show 404 if post doesn't exist */}

        {(!posts || !content) // && !categories
          && <Loader color="blue" />
        }

        {/* TODO if posts is undefined, redirect to 404. */}
        {posts && content // && categories
          && (
            <Container fluid className="main bg-blue-light px-0">
              <Header color="blue" progress />

              <Container className="position-relative">
                <Row>
                  <Col md={9}>
                    <BlogPost content={posts[match.params[0]]} slug={match.params[0]} />
                  </Col>

                  <Col md={3}>
                    <Sidebar content={content.blog} tags={tags} />
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

BlogPostContainer.propTypes = {
  firestoreReducer: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: FIRESTORE_COLLECTION_POSTS, doc: props.match.params[0] },
    FIRESTORE_COLLECTION_CONTENT,
    FIRESTORE_COLLECTION_TAGS,
  ]),
)(BlogPostContainer);
