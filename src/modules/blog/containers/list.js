import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PropTypes from 'prop-types';

// Components
import Footer from '../../footer/component';
import Header from '../../header/component';
import PostList from '../components/list';
import PostTimeline from '../components/post-timeline';
import Sidebar from '../components/sidebar';


class BlogListContainer extends Component {
  render() {
    const { firestoreReducer } = this.props;
    const { content, posts } = firestoreReducer.data;

    return (
      <Container fluid className="bg-blue-light">
        <Header color="blue" />

        {/* TODO handle content.home being null? */}
        {posts && content // && categories
          && (
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
          )
        }

        {!posts && !content // && !categories
          && <div>LOADING</div>
        }

        <Footer />
      </Container>
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
    'posts', 'content', 'categories',
  ]),
)(BlogListContainer);
