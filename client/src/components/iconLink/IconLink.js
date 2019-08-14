import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

export const IconLink = props => (
  <Tooltip title={props.title}>
    <a className='icon-link' href={props.link}><i className={props.icon}/></a>
  </Tooltip>
);