import React from 'react';
import PropTypes from 'prop-types';

export default function SocialMediaIcons(props) {
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
}

SocialMediaIcons.propTypes = {
  Icon: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired,
};
