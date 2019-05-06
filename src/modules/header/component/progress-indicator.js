import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProgressIndicator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPercent: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollPercent = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;

      this.setState({
        scrollPercent,
      });
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

ProgressIndicator.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ProgressIndicator;
