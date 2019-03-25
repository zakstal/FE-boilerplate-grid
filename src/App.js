import React, { Component } from 'react';
import GridContainer from './containers/GridContainer';

class App extends Component {
  render() {
    /* eslint-disable jsx-a11y/href-no-hash */
    return (
      <div className="app">
        <GridContainer />
      </div>
    );
  }
}

export default App;
