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
import Sidebar from '../components/sidebar';


class BlogPostContainer extends Component {
  render() {
    const { firestoreReducer, match } = this.props;
    const { content, posts } = firestoreReducer.data;

    return (
      <Container fluid className="bg-blue-light px-0">
        <Header color="blue" progress />

        {/* TODO handle content.home being null? */}
        {/* TODO if posts is undefined, redirect to 404. */}
        {posts && content // && categories
          && (
            <Container>
              <Row>
                <Col md={9}>
                  <BlogPost content={posts[match.params[0]]} />
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

BlogPostContainer.propTypes = {
  firestoreReducer: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: 'posts', doc: props.match.params[0] },
    'content',
    'categories',
  ]),
)(BlogPostContainer);
