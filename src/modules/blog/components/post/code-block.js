import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';


class CodeBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      src: '',
    };

    this.includeGist = this.includeGist.bind(this);
  }

  componentDidMount() {
    const { gist } = this.props;
    const gistCallback = `embed_gist_callback_${gist}`;
    const url = `https://gist.github.com/${gist}.json?callback=${gistCallback}`;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);

    window[gistCallback] = this.includeGist;
  }

  includeGist(gist) {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = gist.stylesheet;

    document.head.appendChild(link);

    this.setState({
      loading: false,
      src: gist.div,
    });
  }

  render() {
    const { loading, src } = this.state;

    if (loading) {
      return (
        <div className="text-center py-5">
          <Spinner animation="grow" className="color-blue-dark" />
        </div>
      );
    }

    return <div dangerouslySetInnerHTML={{ __html: src }} />;
  }
}

CodeBlock.propTypes = {
  gist: PropTypes.string.isRequired,
};

export default CodeBlock;
