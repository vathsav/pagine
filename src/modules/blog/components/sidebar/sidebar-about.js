import React, { Component } from 'react';

class SidebarAbout extends Component {
  render() {
    return (
      <div className="card">
        <div className="title-small">About</div>

        <div>
          Welcome to my blog! I write about the stuff I work on, places I travel, food, and occassionally about my take
          on life.
        </div>

        <div>
          Learn more about me!
        </div>
      </div>
    );
  }
}

export default SidebarAbout;
