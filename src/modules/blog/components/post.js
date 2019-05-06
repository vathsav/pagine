import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Images
import iconTag from '../../../assets/images/icon_tag.png';


class BlogPost extends Component {
  render() {
    const { content } = this.props;

    return (
      <div className="card w-100 mb-4">
        <Row className="border-bottom-black mx-0 mb-2 pb-2 align-items-center">
          <Col xs={12}>
            <div className="title-medium font-weight-bold">
              {content.title}
            </div>
          </Col>

          <Col xs={8}>
            <div className="title-small">
              {content.timestamp}
              {' '}
              |
              <span className="content-medium font-weight-bold px-1">
                1 comment
              </span>
            </div>
          </Col>

          <Col xs={4}>
            <div className="content-small float-right">
              <img src={iconTag} alt="" className="tag mr-2" />
              {content.tags}
            </div>
          </Col>
        </Row>

        <div className="paragraph px-3 pt-3" dangerouslySetInnerHTML={{ __html: content.content }} />
      </div>
    );
  }
}

BlogPost.propTypes = {
  content: PropTypes.object.isRequired,
};

export default BlogPost;
