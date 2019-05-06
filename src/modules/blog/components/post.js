import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Images
import iconTag from '../../../assets/images/icon_tag.png';


class BlogPost extends Component {
  render() {
    const { content } = this.props;

    console.log(content);

    return (
      <div className="card w-100">
        <Row className="border-bottom-black">
          <Col xs={12}>
            <div className="title-small font-weight-bold">
              {content.title}
            </div>
          </Col>

          <Col>
            <div className="title-small">
              {content.timestamp}
            </div>
          </Col>

          <Col>
            <div className="title-small">
              <img src={iconTag} alt="" />
              {content.tags}
            </div>
          </Col>
        </Row>

        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </div>
    );
  }
}

BlogPost.propTypes = {
  content: PropTypes.object.isRequired,
};

export default BlogPost;
