import React, { Component } from 'react';
import HamburgerMenu from '../shared/HamburgerMenu';
import styles from './About.scss';
import PageFooterCopyright from '../shared/page-footer-copyright/PageFooterCopyright';

export default class About extends Component {
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
      <main className={styles.About}>
        <HamburgerMenu
          click={this.handleHamburgerMenuClick}
          isCurrentlyOpen={isCurrentlyOpen}
          isLinksVisible={isLinksVisible}
        />

        <h1 className="subtitle lines">
          <span>About Me!</span>
        </h1>
        <section className="content-container">
          <p>
            I am a full stack web developer who has a keen interest in front end
            development and design. My journey as a programmer first started at
            <a
              href="https://www.alchemycodelab.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong className="alchemy-link"> Alchemys code lab </strong>
            </a>
            where I completed the full-stack software development program. After
            completing the course, I realized that I enjoyed front end
            development and love bringing ideas and designs to life through
            code. I value simplicity, structure, clean code, and ensuring every
            action or item has a purpose. I am overly persistent when it comes
            to new obstacles or challenges and I enjoy taking on more than I can
            bite.
          </p>
          <h3 className="container-subheaders">Things I enjoy designing:</h3>
          UX, UI, Web, Mobile, Apps
          <h3 className="container-subheaders">Languages I speak:</h3>
          <h5>Front-End:</h5>
          HTML, CSS, SASS, React
          <h5>Back-End:</h5>
          Javascript, Redux, NodeJS, Express, MongoDB, Jest, graphQL
        </section>
        <PageFooterCopyright />
      </main>
    );
  }
}
