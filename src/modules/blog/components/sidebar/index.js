import React, { Component } from 'react';
import SidebarAbout from './sidebar-about';
import SidebarSubscribe from './sidebar-subscribe';
import SidebarCategories from './sidebar-categories';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <SidebarAbout />
        <SidebarSubscribe />
        <SidebarCategories />
      </div>
    );
  }
}

export default Sidebar;
