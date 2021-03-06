import React from 'react';
import PropTypes from 'prop-types';
import styles from './SocialMediaIcons.scss';

export default function SocialMediaIcons(props) {
  const { Icon, route = true, text = true } = props;
  return (
    <div className={styles.SocialMediaIcons}>
      <a
        className="icon-buttons"
        href={route}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text">{text} </p>
        <Icon />
      </a>
    </div>
  );
}

SocialMediaIcons.propTypes = {
  Icon: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
