import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Components
import PostCard from './card';


class PostList extends Component {
  render() {
    const { posts, tags } = this.props;
    const listOfPosts = [];

    Object.keys(posts).forEach((key) => {
      if (posts[key].isPublished) {
        listOfPosts.push(<PostCard key={key} slug={key} content={posts[key]} tags={tags} />);
      }
    });

    return (
      <Row id="list-of-posts">
        {listOfPosts}
      </Row>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.object.isRequired,
  tags: PropTypes.object,
};

PostList.defaultProps = {
  tags: {},
};

export default PostList;
