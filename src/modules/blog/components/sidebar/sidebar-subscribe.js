import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

// Images
import iconCheck from '../../../../assets/images/icon-check.png';


class SidebarSubscribe extends Component {
  render() {
    return (
      <div className="card my-4">
        <div className="title-small text-uppercase font-weight-bold pb-2">Subscribe</div>

        <div className="content-small">
          Receive newsletters for new posts!
        </div>

        <Row noGutters className="align-items-center pt-2">
          <Col xs={10}>
            <input type="text" placeholder="Email" className="field-input-small" />
          </Col>
          <Col xs={2}>
            <div className="button-submit-small bg-blue-dark text-center">
              <img src={iconCheck} className="tag" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SidebarSubscribe;
