import React, { Component } from 'react';
import styles from './Projects.scss';
import HamburgerMenu from '../shared/HamburgerMenu';
import { FaGithub as Github } from 'react-icons/fa';
export default class Projects extends Component {
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
      <main className={styles.Projects}>
        <HamburgerMenu
          click={this.handleHamburgerMenuClick}
          isCurrentlyOpen={isCurrentlyOpen}
          isLinksVisible={isLinksVisible}
        />
        <h1>Check out some of my previous projects!</h1>

        {/* <ul className="projects-container">
          <li className="project">
            <a href="">
              <img
                className="project-image"
                src={require('../assets/img/bitfrost.jpg')}
                alt="Bitfront ride sharing app"
              />
            </a>
            <p>
              A Ride-Sharing app that uses FireBase/FireStore to push real-time
              ride posting to all users. Database is stored in MongoDB from a
              Node/express backend. GraphQL connects a React and Redux
              structured client side App. O-Auth for authentication and a
              CSS-in-JS approach to UI design. Built with a small team in less
              than a week.
            </p>
            <a
              href="https://github.com/team-electric/bitfrost"
              target="_blank"
              rel="noopener noreferrer"
              className="button-dark"
            >
              <i className="github">
                <Github />
              </i>
              Github
            </a>
          </li>
        </ul> 0*/}

        <section className="main-container">
          <div className="inner-container">
            <div className="thumbnails">
              <div className="box">
                <a href="https://youtu.be/s6zR2T9vn2c" className="image-fit">
                  <img src="images/pic01.jpg" alt="" />
                </a>
                <div className="inner">
                  <h3>Nascetur nunc varius commodo</h3>
                  <p>
                    Interdum amet accumsan placerat commodo ut amet aliquam
                    blandit nunc tempor lobortis nunc non. Mi accumsan.
                  </p>
                  <a
                    href="https://youtu.be/s6zR2T9vn2c"
                    className="button fit"
                    data-poptrox="youtube,800x400"
                  >
                    Watch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
