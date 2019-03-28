import React, { Component } from 'react';

import styles from './Home.scss';
import { MdMenu as Menu } from 'react-icons/md';
import { FaLinkedin as LinkedIn, FaGithub as Github } from 'react-icons/fa';

export default class Home extends Component {
  render() {
    return (
      <main className={styles.Home}>
        <button>
          <Menu />
        </button>
        <h1 className="name">
          David
          <span className="secondary-text">Chhing</span>
        </h1>
        <button>
          <LinkedIn />
          <Github />
        </button>
        <footer className="footer-name-copyright">
          Handcrafted by David Chhing 2019 &copy;
        </footer>
      </main>
    );
  }
}
