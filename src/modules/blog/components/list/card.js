import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CommentCount } from 'disqus-react';
import PropTypes from 'prop-types';

// Images
import iconReadTime from '../../../../assets/images/icon-read-time.png';
import iconTag from '../../../../assets/images/icon-tag.png';

// Utils
import { beautifyDateTime } from '../../../../utils/helper';


class PostCard extends Component {
  render() {
    const { content, slug } = this.props;

    const disqusShortName = process.env.REACT_APP_DISQUS_SHORT_NAME;
    const disqusConfig = {
      url: `https://vathsav.com/post/${slug}`,
      identifier: slug,
      title: content.title,
    };

    return (
      <Row className="card w-100 mb-4 pb-0 mx-auto">
        <Link to={`post/${slug}`}>
          { content
          && (
            <div>
              <Row className="border-bottom-black mx-0 mb-2 pb-2 align-items-center no-gutters">
                <Col xs={12}>
                  <div className="title-medium font-weight-bold pb-1">
                    {content.title}
                  </div>
                </Col>

                <Col xs={12} sm={8}>
                  <div className="content-medium">
                    {content.caption}
                  </div>
                </Col>

                <Col xs={12} sm={4}>
                  <div className="content-small float-right">
                    <img src={iconTag} alt="" className="tag mr-2" />
                    {content.tags}
                  </div>
                </Col>
              </Row>

              {content.image
                && <img src={content.image} alt="" className="post-banner" />
              }

              <Row className="py-3 align-items-center">
                <Col xs={12} sm={4}>
                  <div className="content-small">
                    <img src={iconReadTime} alt="" className="tag-2 mr-2" />
                    {content.timeToRead}
                    {' '}
                    min read
                  </div>
                </Col>

                <Col xs={12} sm={8}>
                  <div className="float-right">
                    <span className="content-medium px-1">
                      {beautifyDateTime(new Date(content.timestamp))}
                      {' '}
                      |
                    </span>
                    <span className="content-medium font-weight-bold">
                      <CommentCount shortname={disqusShortName} config={disqusConfig} />
                    </span>
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
