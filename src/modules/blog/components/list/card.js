import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';


class PostCard extends Component {
  render() {
    const { content } = this.props;

    return (
      <Row className="card w-100">
        <div>
          {content.caption}
        </div>

        <div>
          {content.content}
        </div>

        <div>
          {content.disqus_url}
        </div>

        <div>
          {content.image}
        </div>

        <div>
          {content.is_published}
        </div>

        <div>
          {content.post_slug}
        </div>

        <div>
          {content.tags}
        </div>

        <div>
          {content.time_to_read}
        </div>

        <div>
          {content.timestamp.seconds}
        </div>

        <div>
          {content.title}
        </div>
      </Row>
    );
  }
}

PostCard.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PostCard;
