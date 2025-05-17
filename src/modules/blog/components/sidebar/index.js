import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import ScrollToTop from '../scroll-to-top';
// import SidebarAbout from './sidebar-about';
import SidebarSubscribe from './sidebar-subscribe';
import SidebarCategories from './sidebar-categories';

class Sidebar extends Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const { content, tags } = this.props;

    return (
      <div className="paragraph h-100">
        {/* <SidebarAbout content={content.about} /> */}
        <div className="position-sticky sidebar-sticky-offset">
          <SidebarSubscribe />
          <SidebarCategories tags={tags} />

        </div>

        <ScrollToTop />
      </div>
    );
  }
}

Sidebar.propTypes = {
  content: PropTypes.object.isRequired,
  tags: PropTypes.object,
};

Sidebar.defaultProps = {
  tags: {},
};

export default Sidebar;
