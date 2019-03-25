import React, { Component } from 'react';
import _ from 'lodash';

/**
 * https://material-ui.com/api/button/
 * <Button
 *  onClick={onClick}
 * >
 *   I'm a button!
 * </Button>
 */
import Button from '@material-ui/core/Button';

class GridContainer extends Component {
  static state = {
    images: []
  }

  async componentDidMount() {
    const results = await fetch('http://localhost:3001/dogs')
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