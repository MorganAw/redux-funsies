import React, { Component } from 'react';
import { browserHistory }   from 'react-router';

export default class BackButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(browserHistory);
    return(
      <div className="backbutton" onClick={ browserHistory.goBack }>
        BACK !!!
      </div>
    );
  }
}