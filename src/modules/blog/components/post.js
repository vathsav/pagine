import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';


class BlogPost extends Component {
  render() {
    const { content } = this.props;

    return (
      <Row className="card w-100">
        {JSON.stringify(content)}
      </Row>
    );
  }
}

BlogPost.propTypes = {
  content: PropTypes.object.isRequired,
};

export default BlogPost;
