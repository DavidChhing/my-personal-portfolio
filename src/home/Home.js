import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import { MdMenu as Menu } from 'react-icons/md';
import { FaLinkedin as LinkedIn, FaGithub as Github } from 'react-icons/fa';

export default class Home extends Component {
  handleHamburgerMenuClick = () => {
    console.log('clicked');
  };
  render() {
    return (
      <main className={styles.Home}>
        <HamburgerMenu click={this.handleHamburgerMenuClick} Icon={Menu} />
        <h1 className="name">
          David
          <span className="secondary-text">Chhing</span>
        </h1>
        <span className="icon-container">
          <SocialMediaIcons
            Icon={LinkedIn}
            route={'https://www.linkedin.com/in/davidchhing'}
          />
          <SocialMediaIcons
            Icon={Github}
            route={'https://www.github.com/davidchhing'}
          />
        </span>

        <footer className="footer-name-copyright">
          Handcrafted by David Chhing 2019 &copy;
        </footer>
      </main>
    );
  }
}

const HamburgerMenu = props => {
  const { Icon, click } = props;

  return (
    <button onClick={click} className="hamburger-menu">
      <Icon />
    </button>
  );
};

HamburgerMenu.propTypes = {
  Icon: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
};

const SocialMediaIcons = props => {
  const { Icon, route } = props;
  return (
    <a
      className="icon-buttons"
      href={route}
      target="_blank"
      without
      rel="noopener noreferrer"
    >
      <Icon />
    </a>
  );
};

SocialMediaIcons.propTypes = {
  Icon: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired,
};
