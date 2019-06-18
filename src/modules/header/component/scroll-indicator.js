import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ScrollIndicator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPercent: 0,
    };

    this.updateScrollPercent = this.updateScrollPercent.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateScrollPercent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScrollPercent);
  }

  updateScrollPercent() {
    const scrollPercent = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;

    this.setState({
      scrollPercent,
    });
  }

  render() {
    const { color } = this.props;
    const { scrollPercent } = this.state;

    return (
      <div className={`scroll-indicator bg-${color}-dark`} style={{ width: `${scrollPercent}%` }} />
    );
  }
}

ScrollIndicator.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ScrollIndicator;
