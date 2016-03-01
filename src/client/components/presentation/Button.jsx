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
      <div
        className={ String(this.props.color) + ' ' + String(this.active) }
        onClick={ this.props.onClick.bind(null, this.props.color) }>
        { String(this.props.color) + '!!!' }
      </div>
    );
  }
}