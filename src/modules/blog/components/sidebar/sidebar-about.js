import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SidebarAbout extends Component {
  render() {
    const { content } = this.props;

    return (
      <div className="card">
        <div className="title-small">About</div>
        {content}
      </div>
    );
  }
}

SidebarAbout.propTypes = {
  content: PropTypes.string.isRequired,
};

export default SidebarAbout;
