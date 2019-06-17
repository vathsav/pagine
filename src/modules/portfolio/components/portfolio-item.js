import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Images
import iconArticle from '../../../assets/images/icon-article.png';
import iconCode from '../../../assets/images/icon-code.png';
import iconExternalLink from '../../../assets/images/icon-external-link.png';


class PortfolioItem extends Component {
  render() {
    const { content } = this.props;

    return (
      <div className="card mb-3 p-0">
        <img src={content.image} alt="" className="portfolio-item" />

        <div className="p-3">
          <div className="title-small pb-2">
            {content.title}
          </div>

          <div className="content-small pb-3">
            {content.description}
          </div>

          <div className="text-center">
            <span className="px-3">
              <a href={content.url}>
                <img src={iconCode} alt="Link" className="tag-3" />
              </a>
            </span>

            <span className="px-3">
              <a href={content.url}>
                <img src={iconArticle} alt="Link" className="tag-3" />
              </a>
            </span>

            <span className="px-3">
              <a href={content.url}>
                <img src={iconExternalLink} alt="Link" className="tag-3" />
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

PortfolioItem.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PortfolioItem;
