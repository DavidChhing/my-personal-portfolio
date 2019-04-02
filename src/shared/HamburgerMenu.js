import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiX as XMark } from 'react-icons/fi';
import { MdMenu as Menu } from 'react-icons/md';

export default function HamburgerMenu(props) {
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
}

HamburgerMenu.propTypes = {
  isCurrentlyOpen: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  isLinksVisible: PropTypes.bool.isRequired,
};
