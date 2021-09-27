import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  render() {
    return (
      this.props.flats.map((flat) => {
        return (
          <Flat
            details={flat}
            key={flat.id}
            selectFlat={this.props.selectFlat}
          />
        );
      })
    );
  }
}

export default FlatList;