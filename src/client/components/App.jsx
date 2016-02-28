import React, { Component }     from 'react';
import RedButton                from './RedButton':
import BlueButton               from './BlueButton';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="app">
        <RedButton />
        <BlueButton />
      </div>
    );
  }
}