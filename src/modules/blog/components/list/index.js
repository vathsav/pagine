import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Components
import PostCard from './card';


class PostList extends Component {
  render() {
    const { posts } = this.props;
    const listOfPosts = [];

    Object.keys(posts).forEach((key) => {
      if (posts[key].isPublished) {
        listOfPosts.push(<PostCard key={key} slug={key} content={posts[key]} />);
      }
    });

    return (
      <Row>
        {listOfPosts}
      </Row>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.object.isRequired,
};

export default PostList;
