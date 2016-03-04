import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import RedButton                from './container/RedButton';
import BlueButton               from './container/BlueButton';

const mapStateToProps = (state) => {
  return {
    background: state.active
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="app" style={{ backgroundColor: this.props.background }}>
        Background Color: { this.props.background }
        { this.props.children }
        <RedButton />
        <BlueButton />
      </div>
    );
  }
}

App = connect(mapStateToProps)(App);

export default App;