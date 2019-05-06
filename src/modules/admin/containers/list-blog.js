import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PropTypes from 'prop-types';

// Components
import ListBlog from '../components/list-blog';


class BlogListContainer extends Component {
  render() {
    const { firestoreReducer } = this.props;
    const { content, posts } = firestoreReducer.data;

    return (
      <Container fluid className="bg-blue-light px-0">
        {/* TODO handle content.home being null? */}
        {posts && content // && categories
        && (
          <Container>
            <Row>
              <Col md={9}>
                <ListBlog posts={posts} />
              </Col>
            </Row>
          </Container>
        )
        }

        {!posts && !content // && !categories
        && <div>LOADING</div>
        }
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
