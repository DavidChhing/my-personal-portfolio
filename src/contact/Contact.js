import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.scss';
import HamburgerMenu from '../shared/HamburgerMenu';
import { MdMailOutline as Email, MdLocalPhone as Phone } from 'react-icons/md';

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    isCurrentlyOpen: true,
    isLinksVisible: false,
  };

  handleFormChange = event => {
    let newState = {};

    newState[event.target.name] = event.target.value;

    this.setState(newState);
  };

  handleFormSubmit(event) {
    console.log('form submitted');
    event.preventDefault();
  }

  handleHamburgerMenuClick = () => {
    this.setState(prevState => ({
      isCurrentlyOpen: !prevState.isCurrentlyOpen,
      isLinksVisible: !prevState.isLinksVisible,
    }));
  };

  render() {
    const {
      name,
      email,
      subject,
      message,
      isCurrentlyOpen,
      isLinksVisible,
    } = this.state;
    return (
      <main className={styles.Contact}>
        <HamburgerMenu
          click={this.handleHamburgerMenuClick}
          isCurrentlyOpen={isCurrentlyOpen}
          isLinksVisible={isLinksVisible}
        />
        <form onSubmit={this.handleFormSubmit} className="form">
          <h1 className="header">Wanna chat?</h1>
          <p>New projects, freelance inquiry, or even coffee.</p>

          <fieldset className="form-group">
            <FormLabel htmlFor={'name'} title={'Full Name:'} />
            <input
              id="name"
              className="form-input"
              name="name"
              type="text"
              required
              onChange={this.handleFormChange}
              value={name}
            />
          </fieldset>

          <fieldset className="form-group">
            <FormLabel htmlFor={'email'} title={'Email:'} />
            <input
              id="email"
              className="form-input"
              name="email"
              type="email"
              required
              onChange={this.handleFormChange}
              value={email}
            />
          </fieldset>

          <fieldset className="form-group">
            <FormLabel htmlFor={'subject'} title={'Subject:'} />
            <input
              id="subject"
              className="form-input"
              name="subject"
              type="text"
              required
              onChange={this.handleFormChange}
              value={subject}
            />
          </fieldset>

          <fieldset className="form-group">
            <FormLabel htmlFor={'message'} title={'Message:'} />
            <textarea
              id="message"
              className="form-textarea"
              name="message"
              required
              onChange={this.handleFormChange}
              value={message}
            />
          </fieldset>
          <div className="form-group">
            <input
              id="form-button"
              type="submit"
              placeholder="Send message"
              className="submit-button"
            />
          </div>
        </form>

        <section className="bottom-half-contact">
          <dl>
            <dt>Email:</dt>
            <dd>
              <a
                href="mailto:davidhchhing@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="email-icon">
                  <Email />
                </i>
                DavidHChhing@gmail.com
              </a>
            </dd>
            <dt>Phone:</dt>
            <dd>
              <i className="phoneIcon">
                <Phone />
              </i>
              971-570-6899
            </dd>
          </dl>
        </section>
      </main>
    );
  }
}

const FormLabel = props => {
  const { htmlFor, title } = props;
  return <label htmlFor={htmlFor}>{title}</label>;
};

FormLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
