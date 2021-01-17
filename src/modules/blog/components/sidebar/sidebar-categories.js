import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SidebarCategories extends Component {
  render() {
    const { tags } = this.props;

    const tagsList = [];

    Object.keys(tags).forEach((key) => {
      tagsList.push(
        <li key={key}>
          <Link to={`/category/${tags[key].slug}`}>
            {tags[key].name}
          </Link>
        </li>,
      );
    });

    return (
      <div className="card mb-4">
        <div className="title-small text-uppercase font-weight-bold pb-2">Categories</div>

        <ul className="content-small">
          {tagsList}
        </ul>
      </div>
    );
  }
}

SidebarCategories.propTypes = {
  tags: PropTypes.object,
};

SidebarCategories.defaultProps = {
  tags: {},
};

export default SidebarCategories;
