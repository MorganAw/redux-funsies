import React, { Component }     from 'react';
import { connect }              from 'react-redux';

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
      </div>
    );
  }
}

App = connect(mapStateToProps)(App);

export default App;