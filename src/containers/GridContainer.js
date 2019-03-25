import React, { Component } from 'react';
import _ from 'lodash';
import Button from '@material-ui/core/Button';

class GridContainer extends Component {
  static state = {
    images: []
  }

  async componentDidMount() {
    const results = await fetch('http://localhost:3001/cats')
    const data = await results.json();
    this.setState({ images: data })
  }

  render() {

    return (
      <div className="grid-container">
      </div>
    )
  }
}

export default GridContainer;