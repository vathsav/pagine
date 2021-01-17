import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Assets
import gelato from '../../assets/images/gelato.png';

class PopupSubmit extends Component {
  render() {
    const { contactFormSubmitted, success } = this.props;

    return (
      <Row className="popup-overlay h-100 no-gutters">
        <div className="popup text-center mx-auto my-auto p-4 p-lg-5">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <div
            className="popup-close"
            onClick={() => {
              contactFormSubmitted(success, false);
            }}
            onKeyUp={() => {}}
            role="button"
            tabIndex={0}
          />
          { success && (
            <div>
              <div className="title-large text-uppercase font-weight-bold">
                Thank you!
              </div>

              <div className="content-medium py-4">
                I will get back to you soon. In the meantime, here&apos;s a gelato just for you.
              </div>

              <img src={gelato} alt="" />
            </div>
          )}

          { !success && (
            <div>
              <div className="title-large text-uppercase font-weight-bold">
                Uh oh.
              </div>

              <div className="content-medium p-4 p-lg-5">
                Looks like there was an error submitting your message. I&apos;ve been notified of the error.
              </div>

              <div className="content-medium">
                If you would like to contact me, mail me at
                {' '}
                {/* TODO: make the email bold */}
                <span className="font-weight-bold">mail@vathsav.com</span>
              </div>
            </div>
          )}
        </div>
      </Row>
    );
  }
}

PopupSubmit.propTypes = {
  contactFormSubmitted: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
};

export default PopupSubmit;
