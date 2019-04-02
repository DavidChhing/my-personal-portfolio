import React, { Component } from 'react';
import HamburgerMenu from '../shared/HamburgerMenu';
import styles from './About.scss';

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
        <h1 className="header">About Me!</h1>
        <p>
          I am a full stack web developer who has a keen interest in front end
          development and design. My journey as a programmer first started at
          <a
            href="https://www.alchemycodelab.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong> Alchemy's code lab </strong>
          </a>
          where I completed their rigorous career track program learning full
          stack software development. I'm overly persistent when it comes to
          coding and I enjoy taking on new challenges.
        </p>
        <h3>Interest</h3>
        <p>
          I value simplicity, structure, clean code, and ensuring every action
          or item has a purpose.
        </p>
        <h4>Things I enjoy designing:</h4>
        UX, UI, Web, Mobile, Apps
        <div className="job job-3">
          <h3>Skills</h3>
          <p>
            I tend to code things from scratch and allow my imagination to take
            over to bring life to new ideas within the browser.
          </p>
          <h4>Languages I speak:</h4>
          <div>
            <h5>Front-End:</h5>
            HTML, CSS, Sass, Styled Components,
          </div>
          <div>
            <h5>Back-End:</h5>
            Javascript, React, Redux, NodeJS,Express, MongoDB, Firebase, Jquery,
            Jest, graphQL, TDD.
          </div>
        </div>
      </main>
    );
  }
}
