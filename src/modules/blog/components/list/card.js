import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Images
import iconTag from '../../../../assets/images/icon_tag.png';
import iconReadTime from '../../../../assets/images/icon_read_time.png';


class PostCard extends Component {
  render() {
    const { content, slug } = this.props;

    return (
      <Row className="card w-100 mb-4 pb-0">
        <Link to={`post/${slug}`}>
          { content
          && (
            <div>
              <Row className="border-bottom-black mx-0 mb-2 pb-2 align-items-center">
                <Col xs={12}>
                  <div className="title-medium font-weight-bold">
                    {content.title}
                  </div>
                </Col>

                <Col xs={8}>
                  <div className="title-small">
                    {content.caption}
                  </div>
                </Col>

                <Col xs={4}>
                  <div className="content-small float-right">
                    <img src={iconTag} alt="" className="tag mr-2" />
                    {content.tags}
                  </div>
                </Col>
              </Row>

              <img src={content.image} alt="" className="post-banner" />

              <Row className="py-2 align-items-center">
                <Col xs={4} className="">
                  <div className="content-small ">
                    <img src={iconReadTime} alt="" className="tag-2 mr-2" />
                    {content.timeToRead}
                    {' '}
                    min read
                  </div>
                </Col>

                <Col xs={6} className="px-1">
                  <div className="content-medium float-right">
                    {content.timestamp}
                    {' '}
                    |
                  </div>
                </Col>

                <Col xs={2} className="px-1">
                  <div className="content-medium font-weight-bold">
                    1 comment
                    {/* {content.disqusURL} */}
                  </div>
                </Col>
              </Row>
            </div>
          )
        }
        </Link>
      </Row>
    );
  }
}

PostCard.propTypes = {
  content: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};

export default PostCard;
