import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Components
import MenuItem from './menu-item';

// Constants
import {
  ADMIN_VIEW_BLOG_POSTS,
  ADMIN_VIEW_CREATE_BLOG_POST,
  ADMIN_VIEW_CREATE_PORTFOLIO_ITEM,
  ADMIN_VIEW_CREATE_TAG,
  ADMIN_VIEW_PORTFOLIO,
} from '../../../../utils/constants';


class NavigationMenu extends Component {
  render() {
    const { updateView } = this.props;

    return (
      <Row className="card bg-red-dark color-white h-100 w-100 m-0">
        <MenuItem
          name="Create New Blog Post"
          view={ADMIN_VIEW_CREATE_BLOG_POST}
          updateView={updateView}
        />

        <MenuItem
          name="Create New Portfolio Items"
          view={ADMIN_VIEW_CREATE_PORTFOLIO_ITEM}
          updateView={updateView}
        />

        <MenuItem
          name="Create New Tag"
          view={ADMIN_VIEW_CREATE_TAG}
          updateView={updateView}
        />

        <MenuItem
          name="View Blog Posts"
          view={ADMIN_VIEW_BLOG_POSTS}
          updateView={updateView}
        />

        <MenuItem
          name="View Portfolio Items"
          view={ADMIN_VIEW_PORTFOLIO}
          updateView={updateView}
        />
      </Row>
    );
  }
}

NavigationMenu.propTypes = {
  updateView: PropTypes.func.isRequired,
};

export default NavigationMenu;
