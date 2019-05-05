import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';


class AdminPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewText: '',
    };

    this.updatePreview = this.updatePreview.bind(this);
  }

  updatePreview(e) {
    this.setState({
      previewText: e.target.value,
    });
  }

  render() {
    const { previewText } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col sm={12} md={6}>
            {/* Fields */}
            <textarea name="" id="" rows={10} className="w-100" placeholder="Content" onChange={this.updatePreview} />
          </Col>

          <Col sm={12} md={6}>
            {/* Preview */}
            <div className="card w-100" dangerouslySetInnerHTML={{ __html: previewText }} />
          </Col>

        </Row>
      </Container>
    );
  }
}

export default AdminPanel;
