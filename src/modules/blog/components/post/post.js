import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CommentCount, DiscussionEmbed } from 'disqus-react';
import JsxParser from 'react-jsx-parser';
import PropTypes from 'prop-types';

// Components
import AudioFrequencies from '../charts/audio-frequencies';
import CodeBlock from './code-block';
import SketchDisco from '../sketches/disco';
import SketchShapes from '../sketches/shapes';
import SketchSolitaire from '../sketches/solitaire';

// Images
import iconTag from '../../../../assets/images/icon-tag.png';

// Utils
import { DISQUS_URL_PREFIX } from '../../../../utils/constants';
import { beautifyDateTime } from '../../../../utils/helper';
import {Link} from "react-router-dom";


class BlogPost extends Component {
  render() {
    const { content, slug, tags } = this.props;

    const disqusShortName = process.env.REACT_APP_DISQUS_SHORT_NAME;
    const disqusConfig = {
      url: DISQUS_URL_PREFIX + slug,
      identifier: slug,
      title: content.title,
    };

    // Get the tags used in this post
    const postTags = [];

    if (tags && content.tags) {
      (content.tags).forEach((tag, index) => {
        if (tags[tag]) {
          postTags.push(
            <Link key={tag} to={`/category/${tags[tag].slug}`}>
              {tags[tag].name}
              {((content.tags).length > 1 && index < (content.tags).length - 1) ? ', ' : ''}
            </Link>,
          );
        }
      });
    }

    return (
      <div className="card w-100 mb-4">
        <Row className="border-bottom-black mx-0 mb-2 pb-2 align-items-center">
          <Col xs={12}>
            <div className="title-medium font-weight-bold">
              {content.title}
            </div>
          </Col>

          <Col sm={12} md={8}>
            <div className="title-small">
              {beautifyDateTime(new Date(content.timestamp))}
              {' '}
              |
              <span className="content-medium font-weight-bold px-1">
                <CommentCount shortname={disqusShortName} config={disqusConfig} />
              </span>
            </div>
          </Col>

          <Col sm={12} md={4}>
            {postTags && (
              <div className="content-small float-md-right mt-1">
                <img src={iconTag} alt="" className="tag mr-2" />
                {postTags}
              </div>
            )}
          </Col>
        </Row>

        <div className="paragraph px-3 pt-3">
          <JsxParser
            components={{
              AudioFrequencies, CodeBlock, SketchDisco, SketchShapes, SketchSolitaire,
            }}
            jsx={content.content}
          />
        </div>

        <DiscussionEmbed config={disqusConfig} shortname={disqusShortName} />
      </div>
    );
  }
}

BlogPost.propTypes = {
  content: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.object,
};

BlogPost.defaultProps = {
  tags: {},
};

export default BlogPost;
