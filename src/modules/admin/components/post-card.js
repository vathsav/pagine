import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class PostCard extends Component {
  render() {
    const { content, slug } = this.props;

    return (
      <Row className="card w-100">
        { content
        && (
          <div>
            <Link to={`post/${slug}`}>
              <div>
                {content.caption}
              </div>
            </Link>

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

            <div>Edit</div>
            <div>Delete</div>
            <div>Publish</div>
            <div>Save</div>
          </div>
        )
        }
      </Row>
    );
  }
}

PostCard.propTypes = {
  content: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};

export default PostCard;
