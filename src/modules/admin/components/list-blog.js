import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

// Components
import PostCard from './card';

class ListBlog extends Component {
  render() {
    const { posts } = this.props;
    const listOfPublishedPosts = [];
    const listOfUnpublishedPosts = [];

    Object.keys(posts).forEach((key) => {
      if (posts[key].isPublished) {
        listOfPublishedPosts.push(<PostCard key={key} slug={key} content={posts[key]} />);
      } else {
        listOfUnpublishedPosts.push(<PostCard key={key} slug={key} content={posts[key]} />);
      }
    });

    return (
      <div>
        <Row>
          <h1>Unpublished</h1>
          {listOfUnpublishedPosts}
        </Row>

        <Row>
          <h1>Published</h1>
          {listOfPublishedPosts}
        </Row>
      </div>
    );
  }
}

ListBlog.propTypes = {
  posts: PropTypes.object.isRequired,
};

export default firestoreConnect()(ListBlog);
