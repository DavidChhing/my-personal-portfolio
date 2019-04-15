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
              <strong> Alchemys code lab </strong>
            </a>
            where I completed their rigorous career track program learning full
            stack software development. I am overly persistent when it comes to
            coding and I enjoy taking on new challenges.
          </p>
          <h3 className="container-subheaders">Interest</h3>
          <p>
            I value simplicity, structure, clean code, and ensuring every action
            or item has a purpose.
          </p>
          <h3 className="container-subheaders">Things I enjoy designing:</h3>
          UX, UI, Web, Mobile, Apps
          <h3 className="container-subheaders">Skills</h3>
          <p>
            I tend to code things from scratch and allow my imagination to take
            over to bring life to new ideas within the browser.
          </p>
          <h3 className="container-subheaders">Languages I speak:</h3>
          <h5>Front-End:</h5>
          HTML, CSS, Sass, Styled Components,
          <h5>Back-End:</h5>
          Javascript, React, Redux, NodeJS,Express, MongoDB, Firebase, Jquery,
          Jest, graphQL, TDD.
        </section>
        <PageFooterCopyright />
      </main>
    );
  }
}
