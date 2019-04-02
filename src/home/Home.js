import React, { Component } from 'react';
import styles from './Home.scss';
import { FaLinkedin as LinkedIn, FaGithub as Github } from 'react-icons/fa';
import { IoIosPaper as Resume } from 'react-icons/io';
import HamburgerMenu from '../shared/HamburgerMenu';
import SocialMediaIcons from '../shared/SocialMediaIcons';
import PageFooterCopyright from '../shared/page-footer-copyright/PageFooterCopyright';

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
        <h2 className="developer-text">Full-Stack Developer</h2>
        <span className="icon-container">
          <SocialMediaIcons
            Icon={LinkedIn}
            route={'https://www.linkedin.com/in/davidchhing'}
            text="Linked In"
          />
          <SocialMediaIcons
            Icon={Github}
            route={'https://www.github.com/davidchhing'}
            text="Github"
          />
          <SocialMediaIcons
            Icon={Resume}
            route={
              'https://drive.google.com/open?id=1NQMqwjS31gDDnczace6_qufZFA4ZaVGP'
            }
            text="Resume"
          />
        </span>
        <PageFooterCopyright />
      </main>
    );
  }
}
