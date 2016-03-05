import React, { Component } from 'react';
import BackButton           from '../presentation/BackButton';

export default class BackOnly extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="back-only">
        <BackButton />
      </div>
    );
  }
}