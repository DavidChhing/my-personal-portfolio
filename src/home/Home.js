import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import { MdMenu as Menu } from 'react-icons/md';
import { FaLinkedin as LinkedIn, FaGithub as Github } from 'react-icons/fa';
import { FiX as XMark } from 'react-icons/fi';

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

const HamburgerMenu = props => {
  const { isCurrentlyOpen, click, isLinksVisible } = props;

  return (
    <Fragment>
      <button
        onClick={click}
        className={`button ${
          isCurrentlyOpen ? 'hamburger-menu-icon' : 'XMark-icon'
        }`}
      >
        {isCurrentlyOpen ? <Menu /> : <XMark />}
      </button>
      <div>
        {isLinksVisible && (
          <div className="nav-links-container">
            <Link to="/home" className="nav-links">
              Home
            </Link>
            <Link to="/about" className="nav-links">
              About
            </Link>
            <Link to="/projects" className="nav-links">
              Projects
            </Link>
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};

HamburgerMenu.propTypes = {
  isCurrentlyOpen: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  isLinksVisible: PropTypes.bool.isRequired,
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

// const NavigationListItems = props => {
//   return (
//     <section>
//       <Link to="/home">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/projects">Projects</Link>
//       <Link to="/contact">Contact Me</Link>
//       {/* <ul>
//         <li>Home Page</li>
//         <li>About Me</li>
//         <li>Projects</li>
//         <li>Contact Me</li>
//       </ul> */}
//     </section>
//   );
// };
