import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SidebarAbout extends Component {
  render() {
    const { content } = this.props;

    return (
      <div className="card">
        <div className="title-small text-uppercase font-weight-bold">About</div>
        {content}
      </div>
    );
  }
}

SidebarAbout.propTypes = {
  content: PropTypes.string.isRequired,
};

export default SidebarAbout;
