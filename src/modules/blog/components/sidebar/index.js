import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import SidebarAbout from './sidebar-about';
import SidebarSubscribe from './sidebar-subscribe';
import SidebarCategories from './sidebar-categories';


class Sidebar extends Component {
  render() {
    const { content } = this.props;

    return (
      <div className="paragraph h-100">
        <SidebarAbout content={content.about} />

        <div className="position-sticky sidebar-sticky-offset">
          <SidebarSubscribe />
          <SidebarCategories />
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  content: PropTypes.object.isRequired,
  // categories: PropTypes.object.isRequired,
};

export default Sidebar;
