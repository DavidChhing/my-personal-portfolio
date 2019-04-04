import React, { Component } from 'react';
import styles from './Projects.scss';
import HamburgerMenu from '../shared/HamburgerMenu';
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

        <section className="main-container">
          <div className="inner-container">
            <div className="thumbnails">
              <div className="box">
                <div className="image fit">
                  <img src={require('../assets/img/bitfrost.jpg')} alt="" />
                </div>
                <div className="inner-content">
                  <h3>BitFrost</h3>
                  <p>
                    A Ride-Sharing app that uses FireBase/FireStore to push
                    real-time ride posting to all users. Database is stored in
                    MongoDB from a Node/express backend. GraphQL connects a
                    React and Redux structured client side App. O-Auth for
                    authentication and a CSS-in-JS approach to UI design. Built
                    with a small team in less than a week.
                  </p>
                  <a
                    href="https://github.com/team-electric/bitfrost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button fit"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div className="thumbnails">
              <div className="box">
                <div className="image fit">
                  <img
                    src={require('../assets/img/yoyochinese.jpg')}
                    alt=""
                    className="project-image"
                  />
                </div>
                <div className="inner-content">
                  <h3>Yoyo-Chinese</h3>
                  <p>A mobile language learning application for Mandarin.</p>
                  <a
                    href="https://yoyo-chinese.firebaseapp.com/learn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button fit"
                  >
                    Link to live version
                  </a>
                </div>
              </div>
            </div>
            <div className="thumbnails">
              <div className="box">
                <div className="image fit">
                  <img
                    src={require('../assets/img/dogSearch.jpg')}
                    alt=""
                    className="project-image"
                  />
                </div>
                <div className="inner-content">
                  <h3>Dog Match</h3>
                  <p>
                    It was designed for potential buyers and sellers to provide
                    dog information such as cost, location, breed, etc. It was
                    built using Node and mongoDB on the backend, and tested with
                    postman and Heroku on the front end.
                  </p>
                  <a
                    href="https://github.com/teamcasper/dog-match"
                    className="button fit"
                    data-poptrox="youtube,800x400"
                  >
                    Github
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
