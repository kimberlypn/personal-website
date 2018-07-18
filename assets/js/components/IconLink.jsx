import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

/* Renders a tooltip link as an icon */
export default function IconLink({title, icon, link}) {
  return (
    <Tooltip id="tooltip-icon" title={title}>
      <a href={link}>
        <i className={icon}></i>
      </a>
    </Tooltip>
  );
}

IconLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
