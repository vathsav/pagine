import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {
  ADMIN_VIEW_BLOG_POSTS,
  ADMIN_VIEW_CREATE_BLOG_POST,
  ADMIN_VIEW_CREATE_PORTFOLIO_ITEM, ADMIN_VIEW_PORTFOLIO,
} from '../../../utils/constants';


class NavigationMenu extends Component {
  render() {
    const { updateView } = this.props;

    return (
      <Row className="card h-100 w-100">
        <div
          className="cursor-pointer"
          role="button"
          tabIndex="0"
          onKeyDown={() => {}}
          onClick={() => {
            updateView(ADMIN_VIEW_CREATE_BLOG_POST);
          }}
        >
          Create New Blog Post
        </div>

        <div
          className="cursor-pointer"
          role="button"
          tabIndex="0"
          onKeyDown={() => {}}
          onClick={() => {
            updateView(ADMIN_VIEW_CREATE_PORTFOLIO_ITEM);
          }}
        >
          Create New Portfolio Items
        </div>

        <div
          className="cursor-pointer"
          role="button"
          tabIndex="0"
          onKeyDown={() => {}}
          onClick={() => {
            updateView(ADMIN_VIEW_BLOG_POSTS);
          }}
        >
          View Blog Posts
        </div>

        <div
          className="cursor-pointer"
          role="button"
          tabIndex="0"
          onKeyDown={() => {}}
          onClick={() => {
            updateView(ADMIN_VIEW_PORTFOLIO);
          }}
        >
          View Portfolio Items
        </div>
      </Row>
    );
  }
}

NavigationMenu.propTypes = {
  updateView: PropTypes.func.isRequired,
};

export default NavigationMenu;
