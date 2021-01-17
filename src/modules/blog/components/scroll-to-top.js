import React, { Component } from 'react';

// Images
import iconScrollToTop from '../../../assets/images/icon-scroll-to-top.png';

class ScrollToTop extends Component {
  render() {
    return (
      <div
        className="absolute-bottom-right mr-4 mb-4 icon-scroll"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        onKeyUp={() => {}}
        role="button"
        tabIndex={0}
      >
        <img src={iconScrollToTop} alt="^" />
      </div>
    );
  }
}

export default ScrollToTop;
