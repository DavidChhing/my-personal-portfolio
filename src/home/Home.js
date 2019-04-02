import React, { Component } from 'react';
import styles from './Home.scss';
import { FaLinkedin as LinkedIn, FaGithub as Github } from 'react-icons/fa';
import HamburgerMenu from '../shared/HamburgerMenu';
import SocialMediaIcons from '../shared/SocialMediaIcons';

export default class Home extends Component {
  state = {
    isCurrentlyOpen: true,
    isLinksVisible: false,
  };

  handleHamburgerMenuClick = () => {
    this.setState(prevState => ({
      isCurrentlyOpen: !prevState.isCurrentlyOpen,
      isLinksVisible: !prevState.isLinksVisible,
    }));
  };

  render() {
    const { isCurrentlyOpen, isLinksVisible } = this.state;

    return (
      <main className={styles.Home}>
        <HamburgerMenu
          click={this.handleHamburgerMenuClick}
          isCurrentlyOpen={isCurrentlyOpen}
          isLinksVisible={isLinksVisible}
        />
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
