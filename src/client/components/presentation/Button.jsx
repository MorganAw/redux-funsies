import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.active = false;
  }

  componentWillReceiveProps(nextProps) {
    this.active = (this.props.color === this.props.active_color);
  }

  render(){
    return(
      <div className={ String(this.color) + ' ' + String(this.active) }>
        Blue!!!
      </div>
    );
  }
}