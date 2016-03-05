import React, { Component } from 'react';
import { Link }                 from 'react-router';

import BlueButton           from '../container/BlueButton';
import RedButton           from '../container/RedButton';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="buttons">
        <BlueButton />
        <RedButton />
        <Link to="/backbutton">
          GOTOBACKBUTTON
        </Link>
      </div>
    );
  }
}