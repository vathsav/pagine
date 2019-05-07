import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';


class MenuItem extends Component {
  render() {
    const { name, view, updateView } = this.props;

    return (
      <Row
        className="card bg-red-dark color-white w-100 m-0"
        onClick={() => {
          updateView(view);
        }}
      >
        {name}
      </Row>
    );
  }
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  updateView: PropTypes.func.isRequired,
};

export default MenuItem;
