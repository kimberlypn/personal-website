import React from 'react';
import BaseComponentService from './BaseComponentService';

export default class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.registerService = BaseComponentService.registerService.bind(this);
  }
}