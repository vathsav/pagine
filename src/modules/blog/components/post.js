import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { DiscussionEmbed, CommentCount } from 'disqus-react';
import PropTypes from 'prop-types';

// Images
import iconTag from '../../../assets/images/icon_tag.png';

// Utils
import { DISQUS_URL_PREFIX } from '../../../utils/constants';
import { beautifyDateTime } from '../../../utils/helper';


class BlogPost extends Component {
  render() {
    const { content, slug } = this.props;

    const disqusShortName = process.env.REACT_APP_DISQUS_SHORT_NAME;
    const disqusConfig = {
      url: DISQUS_URL_PREFIX + slug,
      identifier: slug,
      title: content.title,
    };

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
              {beautifyDateTime(new Date(content.timestamp))}
              {' '}
              |
              <span className="content-medium font-weight-bold px-1">
                <CommentCount shortname={disqusShortName} config={disqusConfig} />
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

        <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
      </div>
    );
  }
}

BlogPost.propTypes = {
  content: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};

export default BlogPost;
