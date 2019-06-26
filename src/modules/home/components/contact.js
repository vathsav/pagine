import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as emailjs from 'emailjs-com';
import PropTypes from 'prop-types';


class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitContactForm = this.submitContactForm.bind(this);
  }

  submitContactForm() {
    const { name, email, message } = this.state;
    const { contactFormSubmitted } = this.props;

    const templateParameters = {
      name,
      email,
      message,
    };

    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParameters,
    )
      .then(() => {
        contactFormSubmitted(true, true);
      }, () => {
        contactFormSubmitted(false, true);
      });
  }

  handleInputChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Container fluid>
        <div className="title-large text-uppercase font-weight-bold text-center mb-4">Want to get in touch?</div>

        <Row>
          <Col sm={6}>
            <input type="text" name="name" className="field-input mb-2 mb-lg-3" placeholder="Name" onChange={this.handleInputChange} />
          </Col>

          <Col sm={6}>
            <input type="email" name="email" className="field-input mb-2 mb-lg-3" placeholder="Email" onChange={this.handleInputChange} />
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <textarea className="field-input area" name="message" placeholder="Message" onChange={this.handleInputChange} />
          </Col>
        </Row>

        <Row className="text-center">
          <Col sm={12}>
            <input
              type="button"
              className="button-submit bg-red-dark mt-2 mt-lg-3 mb-4 mb-lg-5 mb-xl-4"
              value="submit"
              onClick={this.submitContactForm}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

Contact.propTypes = {
  contactFormSubmitted: PropTypes.func.isRequired,
};

export default Contact;
