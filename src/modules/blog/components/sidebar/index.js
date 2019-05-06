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
      <div className="paragraph">
        <SidebarAbout content={content.about} />
        <SidebarSubscribe />
        <SidebarCategories />
      </div>
    );
  }
}

Sidebar.propTypes = {
  content: PropTypes.object.isRequired,
  // categories: PropTypes.object.isRequired,
};

export default Sidebar;
