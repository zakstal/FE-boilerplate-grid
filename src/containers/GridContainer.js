import React, { Component } from 'react';
import _ from 'lodash';
import Search from '../components/Search';

class GridContainer extends Component {
  render() {

    return (
      <div className="grid-container">
        <Search />
      </div>
    )
  }
}

export default GridContainer;