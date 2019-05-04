import React, { Component } from 'react';

class SidebarCategories extends Component {
  render() {
    return (
      <div className="card">
        <div className="title-small">Categories</div>

        <ul>
          <li>Android</li>
          <li>Arduino</li>
          <li>Data Visualisation</li>
          <li>Particle Core</li>
          <li>Processing</li>
          <li>Rants</li>
        </ul>
      </div>
    );
  }
}

export default SidebarCategories;
